// --- GLOBAL STATE ---
let auth = null, db = null, currentUser = null;
let watchedState = {}, reviewedState = {};
const resourceType = document.body.dataset.resource; // Detects if we are on pixorize, micro, or pharm

// --- FIREBASE INITIALIZATION ---
function initTracker(config) {
  firebase.initializeApp(config);
  auth = firebase.auth();
  db = firebase.firestore();

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      currentUser = user;
      await fetchState();
    } else {
      currentUser = null;
      loadLocalState();
    }
    updateAllUI();
  });
}

// --- DATA PERSISTENCE (Saving/Loading) ---
async function fetchState() {
  if (!currentUser) return;
  try {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if (doc.exists) {
      // Logic to fetch specific resource data from Firebase
      watchedState = doc.data()[resourceType + '_watched'] || {};
      reviewedState = doc.data()[resourceType + '_reviewed'] || {};
    }
  } catch (err) {
    console.error("Firebase fetch failed:", err);
    loadLocalState();
  }
}

function loadLocalState() {
  // Fallback to local storage if not logged in
  watchedState = JSON.parse(localStorage.getItem(resourceType + '_w') || '{}');
  reviewedState = JSON.parse(localStorage.getItem(resourceType + '_r') || '{}');
}

function saveState() {
  const data = {
    [resourceType + '_watched']: watchedState,
    [resourceType + '_reviewed']: reviewedState
  };
  if (currentUser) {
    db.collection('users').doc(currentUser.uid).set(data, { merge: true }).catch(console.error);
  }
  localStorage.setItem(resourceType + '_w', JSON.stringify(watchedState));
  localStorage.setItem(resourceType + '_r', JSON.stringify(reviewedState));
}

// --- CORE ACTIONS ---
function toggleWatch(id, event) {
  event.stopPropagation();
  watchedState[id] = !watchedState[id];
  saveState();
  updateAllUI();
}

function toggleReview(id, event) {
  event.stopPropagation();
  reviewedState[id] = !reviewedState[id];
  saveState();
  updateAllUI();
}

const isComplete = (id) => !!(watchedState[id] && reviewedState[id]);

// --- UI RENDERING ---
function updateAllUI() {
  renderMainContent();
  updateHeaderStats();
}

function renderMainContent() {
  const container = document.getElementById('main-content');
  if (!container) return;

  const data = RESOURCES[resourceType]; // Get data from study_data.js
  
  container.innerHTML = data.map(cat => {
    const doneCount = cat.videos.filter(v => isComplete(v.id)).length;
    const totalCount = cat.videos.length;
    const pct = Math.round((doneCount / totalCount) * 100);
    const tier = TIER_DATA[cat.tier];

    return `
    <div class="collapsible-group">
      <div class="section-hdr" style="background:${tier.bg}; border-left: 4px solid ${tier.color}" onclick="this.parentElement.classList.toggle('is-open')">
        <div style="flex:1">
          <div style="font-weight:600; color:${tier.color}">${cat.name}</div>
          <div style="font-size:12px; color:var(--muted)">${cat.why}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px; font-family:'DM Mono'">${doneCount}/${totalCount}</div>
          <div class="section-meta-bar"><div class="section-meta-bar-fill" style="width:${pct}%; background:${tier.color}"></div></div>
        </div>
        <span class="block-chevron">▶</span>
      </div>
      <div class="collapsible-content">
        ${cat.videos.map(v => `
          <div class="video-row ${isComplete(v.id) ? 'fully-done' : ''}">
            <div class="check-box ${watchedState[v.id] ? 'checked' : ''}" onclick="toggleWatch('${v.id}',event)">${watchedState[v.id] ? '✓' : ''}</div>
            <div class="check-box ${reviewedState[v.id] ? 'reviewed' : ''}" onclick="toggleReview('${v.id}',event)">${reviewedState[v.id] ? '✓' : ''}</div>
            <div class="video-name">${v.name}</div>
            <div class="video-time">${v.time}</div>
            <div class="section-meta-bar"><div class="section-meta-bar-fill" style="width:${v.yield * 10}%; background:${tier.color}"></div></div>
            <div class="reason-tag" style="border-color:${tier.color}; color:${tier.color}">${tier.name}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
  }).join('');
}

function updateHeaderStats() {
  const data = RESOURCES[resourceType];
  const allVids = data.flatMap(c => c.videos);
  const done = allVids.filter(v => isComplete(v.id)).length;
  
  const hcomp = document.getElementById("header-completed");
  const hrem = document.getElementById("header-remaining");
  
  if (hcomp) hcomp.textContent = `${done} / ${allVids.length}`;
  if (hrem) hrem.textContent = allVids.length - done;
}

function switchTab(name, btn) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("tab-" + name).classList.add("active");
  if (btn) btn.classList.add("active");
}
