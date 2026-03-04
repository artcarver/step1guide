/* ================================================================
   STUDY DATA HUB: Master Database
   Contains: Every video for Pharm, Micro, and Pixorize
   ================================================================ */

const TIER_DATA = {
  1: { name: "TIER 1: MUST KNOW", color: "#c03050", bg: "rgba(192,48,80,0.08)" },
  2: { name: "TIER 2: HIGH YIELD", color: "#b85820", bg: "rgba(184,88,32,0.08)" },
  3: { name: "TIER 3: SOLID YIELD", color: "#8a6e10", bg: "rgba(138,110,16,0.07)" },
  4: { name: "TIER 4: LOWER YIELD", color: "#5a7060", bg: "rgba(90,112,96,0.07)" }
};

const RESOURCES = {
  // ── SKETCHY PHARM ──
  pharm: [
    {
      id: "antimicro", name: "Antimicrobials", tier: 1, totalTime: "5h 5m",
      why: "Covers cell wall inhibitors, protein synthesis inhibitors, and antivirals[cite: 366].",
      videos: [
        {id:"p_am1", name:"Penicillin", time:"13", yield:9},
        {id:"p_am2", name:"Nafcillin, Oxacillin, Methicillin, Dicloxacillin", time:"6", yield:7},
        {id:"p_am3", name:"Ampicillin, Amoxacillin, Piperacillin, Ticarcillin", time:"13", yield:7},
        {id:"p_am4", name:"Cephalosporins", time:"15", yield:9},
        {id:"p_am5", name:"Monobactams and Carbapenems", time:"9", yield:7},
        {id:"p_am6", name:"Vancomycin", time:"11", yield:9},
        {id:"p_am7", name:"Daptomycin", time:"6", yield:5},
        {id:"p_am8", name:"Tetracyclines", time:"13", yield:7},
        {id:"p_am9", name:"Macrolides", time:"7", yield:7},
        {id:"p_am10", name:"Clindamycin", time:"11", yield:7},
        {id:"p_am11", name:"Chloramphenicol", time:"5", yield:5},
        {id:"p_am12", name:"Linezolid", time:"7", yield:5},
        {id:"p_am13", name:"Aminiglycosides", time:"13", yield:8},
        {id:"p_am14", name:"Tuberculosis Drugs", time:"17", yield:9},
        {id:"p_am15", name:"Leprosy Drugs", time:"7", yield:3},
        {id:"p_am16", name:"Trimethoprim/Sulfamethoxazole", time:"17", yield:7},
        {id:"p_am17", name:"Fluoroquinolones", time:"12", yield:7},
        {id:"p_am18", name:"Metronidazole", time:"9", yield:8},
        {id:"p_am19", name:"Amphotericin, Flucytosine", time:"12", yield:7},
        {id:"p_am20", name:"Azoles", time:"12", yield:7},
        {id:"p_am21", name:"Grideofulvin, Terbafine, Echinocandins", time:"9", yield:5},
        {id:"p_am22", name:"NRTIs", time:"11", yield:8},
        {id:"p_am23", name:"NNRTIs", time:"5", yield:6},
        {id:"p_am24", name:"Protease Inhibitors", time:"7", yield:7},
        {id:"p_am25", name:"Maraviroc, Fusion Inhibitors, Integrase Inhibitors", time:"10", yield:5},
        {id:"p_am26", name:"IFN-a, IFN-B, IFN-y", time:"10", yield:5},
        {id:"p_am27", name:"Ribavirin, Sofosbuvir, Simeprevir", time:"11", yield:5},
        {id:"p_am28", name:"Acyclovir, Valacyclovir, Famciclovir, Cidofovir, Foscarnet", time:"14", yield:8},
        {id:"p_am29", name:"Ganciclovir, Valganciclovir, Foscarnet, Cidofovir", time:"12", yield:6}
      ]
    },
    {
      id: "autonomic", name: "Autonomic", tier: 1, totalTime: "2h 30m",
      why: "Foundational parasympathetic and sympathetic pharmacology[cite: 367].",
      videos: [
        {id:"p_au1", name:"Cholinomimetics", time:"16", yield:9},
        {id:"p_au2", name:"Cholinesterase Inhibitors", time:"21", yield:9},
        {id:"p_au3", name:"Muscarinic Antagonists", time:"20", yield:9},
        {id:"p_au4", name:"Sympathomimetics", time:"30", yield:9},
        {id:"p_au5", name:"Indirect Sympathomimetics", time:"17", yield:7},
        {id:"p_au6", name:"Alpha Drugs", time:"22", yield:8},
        {id:"p_au7", name:"Beta Blockers", time:"24", yield:9}
      ]
    },
    {
      id: "cv_renal", name: "Cardiovascular and Renal", tier: 1, totalTime: "4h 10m",
      why: "Heavily tested topics including Heart Failure, Diuretics, and Arrhythmias[cite: 367, 368].",
      videos: [
        {id:"p_cv1", name:"Digoxin, milrinone, nesiritide", time:"20", yield:8},
        {id:"p_cv2", name:"ACE Inhibitors, ARBS, Aliskiren", time:"26", yield:10},
        {id:"p_cv3", name:"Acetazolamide, mannitol", time:"24", yield:7},
        {id:"p_cv4", name:"Loop Diuretics", time:"21", yield:9},
        {id:"p_cv5", name:"Thiazides", time:"20", yield:9},
        {id:"p_cv6", name:"K+ Sparing Diuretics", time:"25", yield:8},
        {id:"p_cv7", name:"Calcium Channel Blockers", time:"21", yield:9},
        {id:"p_cv8", name:"Primary HTN and HTN-Emergency", time:"25", yield:8},
        {id:"p_cv9", name:"Class I: A-C", time:"24", yield:8},
        {id:"p_cv10", name:"Class II", time:"10", yield:8},
        {id:"p_cv11", name:"Class III", time:"12", yield:8},
        {id:"p_cv12", name:"Class IV", time:"9", yield:7},
        {id:"p_cv13", name:"Class V", time:"13", yield:6}
      ]
    },
    {
      id: "blood", name: "Blood and Inflammation", tier: 1, totalTime: "3h 32m",
      why: "Covers essential anticoagulants, dyslipidemia drugs, and NSAIDs[cite: 369, 370, 371].",
      videos: [
        {id:"p_bl1", name:"Heparin, LWMH, Fondaparinux, Direct Thrombin/Xa Inhibitors", time:"30", yield:10},
        {id:"p_bl2", name:"Warfarin", time:"21", yield:10},
        {id:"p_bl3", name:"Anti-Platelet Agents", time:"29", yield:9},
        {id:"p_bl4", name:"Thrombolytics", time:"15", yield:7},
        {id:"p_bl5", name:"Statins (HMGCoA-Reductase Inhibitors)", time:"26", yield:9},
        {id:"p_bl6", name:"Cholestyramine, Ezetimibe", time:"17", yield:5},
        {id:"p_bl7", name:"Fibrates, Niacin", time:"16", yield:5},
        {id:"p_bl8", name:"NSAIDS", time:"34", yield:10},
        {id:"p_bl9", name:"Gout Drugs", time:"24", yield:8}
      ]
    },
    {
      id: "smooth_muscle", name: "Smooth Muscle", tier: 2, totalTime: "1h 22m",
      why: "Vasoactive drugs and asthma therapies[cite: 373, 376].",
      videos: [
        {id:"p_sm1", name:"Nitrates", time:"19", yield:8},
        {id:"p_sm2", name:"Triptans & Migraine", time:"9", yield:7},
        {id:"p_sm3", name:"Prostaglandins, Prostacyclin, Bosentan, PDE5 Inhibitors", time:"16", yield:6},
        {id:"p_sm4", name:"Anti-Histamines", time:"16", yield:7},
        {id:"p_sm5", name:"Asthma Therapy", time:"22", yield:9}
      ]
    },
    {
      id: "gi_endocrine", name: "GI and Endocrine", tier: 1, totalTime: "3h 50m",
      why: "Crucial topics like Diabetes management and Glucocorticoids[cite: 376].",
      videos: [
        {id:"p_ge1", name:"Anti-Emetic Agents", time:"19", yield:6},
        {id:"p_ge2", name:"H2 Receptor Blockers, PPIs", time:"23", yield:8},
        {id:"p_ge3", name:"Laxative Agents", time:"17", yield:5},
        {id:"p_ge4", name:"Insulin, Sulfonylureas, Meglitinides, GLP-1, DPP-4", time:"30", yield:10},
        {id:"p_ge5", name:"Metformin, Thiazolidinediones, Pramlintide, SGLT2", time:"24", yield:9},
        {id:"p_ge6", name:"Propylthiouracil, Methimazole, Levothyroxine", time:"22", yield:8},
        {id:"p_ge7", name:"Bisphosphonates, Raloxifene, Denosumab, Calcitonin", time:"18", yield:7},
        {id:"p_ge8", name:"Teriparatide, Vitamin D, Cinacalcet, Sevelamer", time:"19", yield:5},
        {id:"p_ge9", name:"Glucocorticoids", time:"21", yield:9},
        {id:"p_ge10", name:"ADH, DDAVP, ADH Receptor Antagonists", time:"19", yield:7},
        {id:"p_ge11", name:"Growth Hormone, Mecasermin, Octreotide, Pegvisomant", time:"18", yield:6}
      ]
    },
    {
      id: "neuro_psych", name: "Neuro and Psych", tier: 1, totalTime: "4h 26m",
      why: "Extensive coverage of Psych and Neuro drugs, including antidepressants and anticonvulsants[cite: 376, 377].",
      videos: [
        {id:"p_np1", name:"Benzodiazepines, Flumezenil", time:"20", yield:9},
        {id:"p_np2", name:"Nonbenzodiazepine Hypnotics, Melatonin, Ramelteon", time:"13", yield:6},
        {id:"p_np3", name:"Barbituates", time:"14", yield:6},
        {id:"p_np4", name:"Propofol, Etomidate, Ketamine", time:"10", yield:7},
        {id:"p_np5", name:"Inhaled Anesthetics, Dantrolene", time:"15", yield:7},
        {id:"p_np6", name:"Opiates, Naloxona, Naltrexone", time:"21", yield:9},
        {id:"p_np7", name:"SSRIS, SNRIs, Cyroheptadine", time:"21", yield:9},
        {id:"p_np8", name:"Tricyclic Antidepressants", time:"16", yield:8},
        {id:"p_np9", name:"MAO Inhibitors", time:"13", yield:7},
        {id:"p_np10", name:"Bupropion, Mirtazapine, Trazodone", time:"15", yield:7},
        {id:"p_np11", name:"Lithium", time:"12", yield:9},
        {id:"p_np12", name:"Valproate, Topiramate, Lamotrigine, Levetiracetam", time:"14", yield:8},
        {id:"p_np13", name:"Carbamazepine, Phenytoin, Gabapentin, Vigabatrin", time:"19", yield:8},
        {id:"p_np14", name:"Ethosuximide", time:"6", yield:7},
        {id:"p_np15", name:"First Generation Antipsychotics", time:"20", yield:9},
        {id:"p_np16", name:"Second Generation Antipsychotics", time:"17", yield:8},
        {id:"p_np17", name:"Levodopa, Carbidopa, Selegiline, Pramipexole, Amantadine", time:"20", yield:8}
      ]
    },
    {
      id: "onco", name: "Antineoplastics", tier: 2, totalTime: "2h 9m",
      why: "Targets DNA and cellular division through various antimetabolites and inhibitors[cite: 377, 378].",
      videos: [
        {id:"p_on1", name:"Methotrexate, Leucovorin, 5-Fluorouracil, Hydroxyurea", time:"29", yield:8},
        {id:"p_on2", name:"Azathioprine, 6-Mercaptopurine, Mycophenolate mofetil", time:"16", yield:7},
        {id:"p_on3", name:"Cladribine, Cytarabine, Gemcitabine", time:"7", yield:3},
        {id:"p_on4", name:"Cyclophosphamide, Ifosfamide, Nitrosureas, Streptozocin", time:"12", yield:7},
        {id:"p_on5", name:"Cisplatin, Carboplatin, Amifostine", time:"6", yield:7},
        {id:"p_on6", name:"Bleomycin, Doxorubicin, Daunorubicin", time:"8", yield:7},
        {id:"p_on7", name:"Etoposide, Teniposide, Topotecan, Irinotecan", time:"6", yield:5},
        {id:"p_on8", name:"Vincristine, Vinblastine, Paclitaxe", time:"7", yield:7},
        {id:"p_on9", name:"Imatinib, Erlotinib, Sorafenib, Sunitinib, Vemurafenib", time:"15", yield:7},
        {id:"p_on10", name:"Rituximab, Cetuximab, Bevacizumab, Trastuzumab", time:"23", yield:6}
      ]
    }
  ],

  // ── SKETCHY MICRO ──
  micro: [
    {
      id: "bacteria", name: "Bacteria", tier: 1, totalTime: "8h 39m",
      why: "Core bacterial pathology[cite: 379].",
      videos: [
        {id:"m_b1", name:"Staph aureus", time:"11", yield:10},
        {id:"m_b2", name:"Staph epidermidis & Staph saprophyticus", time:"7", yield:8},
        {id:"m_b3", name:"Strep pyogenes", time:"14.5", yield:9},
        {id:"m_b4", name:"Strep agalactiae", time:"5.5", yield:8},
        {id:"m_b5", name:"Strep pneumoniae & Strep viridans", time:"9", yield:10},
        {id:"m_b6", name:"Enterococcus", time:"4", yield:7},
        {id:"m_b7", name:"Bacillus anthracis and cereus", time:"10", yield:7},
        {id:"m_b8", name:"Clostridium tetani", time:"7", yield:8},
        {id:"m_b9", name:"Clostridium botulinum", time:"7.5", yield:8},
        {id:"m_b10", name:"Clostridium difficile", time:"8", yield:9},
        {id:"m_b11", name:"Clostridium perfringens", time:"5.5", yield:7},
        {id:"m_b12", name:"Corynebacterium diptheriae", time:"7", yield:8},
        {id:"m_b13", name:"Listeria monocytogenes", time:"4", yield:9},
        {id:"m_b14", name:"Actinomyces", time:"3", yield:6},
        {id:"m_b15", name:"Nocardia", time:"7", yield:6},
        {id:"m_b16", name:"Neisseña species overview", time:"5", yield:8},
        {id:"m_b17", name:"Neisseria meningitidis", time:"19", yield:9},
        {id:"m_b18", name:"Neissena gonormean", time:"7.5", yield:9},
        {id:"m_b19", name:"Klebsiella, Enterobacter, Serratta", time:"8.5", yield:7},
        {id:"m_b20", name:"Salmonella", time:"8", yield:8},
        {id:"m_b21", name:"Shigella", time:"6.5", yield:8},
        {id:"m_b22", name:"Escherichia coll", time:"9", yield:10},
        {id:"m_b23", name:"Yersinia enterocolitica", time:"8", yield:5},
        {id:"m_b24", name:"Campylobacter", time:"5.5", yield:7},
        {id:"m_b25", name:"Vibno", time:"6", yield:6},
        {id:"m_b26", name:"Helicobacter pylori", time:"5.5", yield:9},
        {id:"m_b27", name:"Pseudomonas", time:"10", yield:9},
        {id:"m_b28", name:"Proteus mirabilis", time:"3.5", yield:6},
        {id:"m_b29", name:"Bortadella pertussin", time:"7.5", yield:8},
        {id:"m_b30", name:"Haemophilus influenzae", time:"9", yield:8},
        {id:"m_b31", name:"Lemonella", time:"7.5", yield:7},
        {id:"m_b32", name:"Bartonella henselae", time:"4", yield:5},
        {id:"m_b33", name:"Brucella", time:"5", yield:5},
        {id:"m_b34", name:"Frantisella tularensis", time:"4", yield:5},
        {id:"m_b35", name:"Pasteurella multocida", time:"5", yield:4},
        {id:"m_b36", name:"Mycobacterium tuberculosis", time:"16.5", yield:10},
        {id:"m_b37", name:"Mycobacterium leprae", time:"9", yield:6},
        {id:"m_b38", name:"Borrelia burgdorferi", time:"8", yield:8},
        {id:"m_b39", name:"Leptospirosis", time:"5", yield:5},
        {id:"m_b40", name:"Treponema pallidum", time:"13", yield:10},
        {id:"m_b41", name:"Chlamydia", time:"15", yield:9},
        {id:"m_b42", name:"Covella burnetii", time:"5", yield:5},
        {id:"m_b43", name:"Garnerella vaginalis", time:"5.5", yield:7},
        {id:"m_b44", name:"Mycoplasma pneumoniae", time:"6", yield:8},
        {id:"m_b45", name:"Rickettsia species overview", time:"3.5", yield:7},
        {id:"m_b46", name:"Rickettsia prowazeki", time:"4", yield:5},
        {id:"m_b47", name:"Hickettsia nickettsi", time:"4", yield:8}
      ]
    },
    {
      id: "viruses", name: "Viruses", tier: 1, totalTime: "4h 48m",
      why: "Viral agents including RNA and DNA types[cite: 380].",
      videos: [
        {id:"m_v1", name:"Picornavirus overview", time:"11", yield:7},
        {id:"m_v2", name:"(Pica) Poliovirus", time:"7", yield:7},
        {id:"m_v3", name:"(Fico) Coxsackievirus", time:"5", yield:7},
        {id:"m_v4", name:"(Pico) thinovirus", time:"5", yield:5},
        {id:"m_v5", name:"(Pico) Hepatitis A", time:"7", yield:8},
        {id:"m_v6", name:"Calovirus (Norovirus)", time:"5.5", yield:6},
        {id:"m_v7", name:"Flavirivus (Dengue, WNV, Yellow Fever)", time:"8", yield:7},
        {id:"m_v8", name:"Hepatitis C", time:"10.5", yield:9},
        {id:"m_v9", name:"Togavirus (Rubella)", time:"11.5", yield:8},
        {id:"m_v10", name:"Coronavinus", time:"14", yield:6},
        {id:"m_v11", name:"HIV", time:"16.5", yield:10},
        {id:"m_v12", name:"Orthomyxovirus (influenza)", time:"18.5", yield:9},
        {id:"m_v13", name:"Paramysovirus (Measles, Mumps)", time:"15", yield:8},
        {id:"m_v14", name:"Rhabdovirus", time:"9", yield:6},
        {id:"m_v15", name:"Filovirus (Ebola)", time:"5", yield:5},
        {id:"m_v16", name:"Burnyavirus (California Encephalitis)", time:"6", yield:5},
        {id:"m_v17", name:"Arenavirus", time:"5", yield:4},
        {id:"m_v18", name:"Reovirus (Rotavirus)", time:"7", yield:8},
        {id:"m_v19", name:"HSV-1 and HSV-2", time:"11", yield:9},
        {id:"m_v20", name:"HHV-4 (Epstein Barr Virus)", time:"13.5", yield:9},
        {id:"m_v21", name:"HHV-5 (Cytomegalovirus)", time:"12", yield:9},
        {id:"m_v22", name:"HHV-3 (Varicella Zoster Virus)", time:"12", yield:8},
        {id:"m_v23", name:"HHV-6 (Roseola)", time:"5", yield:7},
        {id:"m_v24", name:"HHV-E (Kaposi's Sarcoma)", time:"7", yield:7},
        {id:"m_v25", name:"Polyomavirus (JC vinus)", time:"6.5", yield:7},
        {id:"m_v26", name:"Papillomavirus", time:"14", yield:9},
        {id:"m_v27", name:"Parvovirus", time:"7", yield:8},
        {id:"m_v28", name:"Adenovirus", time:"5", yield:5},
        {id:"m_v29", name:"Poxvirus", time:"8.5", yield:5},
        {id:"m_v30", name:"Hepatitis (DNA) & Hep D", time:"18.5", yield:10}
      ]
    },
    {
      id: "parasites", name: "Parasites", tier: 2, totalTime: "2h 6m",
      why: "Protozoa and Helminths[cite: 381].",
      videos: [
        {id:"m_p1", name:"Giardia lamblia", time:"5.5", yield:8},
        {id:"m_p2", name:"Entamoeba histolytica", time:"8", yield:7},
        {id:"m_p3", name:"Cryptospondium", time:"4.5", yield:7},
        {id:"m_p4", name:"Txoplasma gondii", time:"10.5", yield:9},
        {id:"m_p5", name:"Trypanosoma brucel", time:"5", yield:5},
        {id:"m_p6", name:"Naegleria fowleri", time:"6", yield:6},
        {id:"m_p7", name:"Trypanosoma cruzi (Chagas)", time:"6", yield:7},
        {id:"m_p8", name:"Bebesia", time:"7", yield:5},
        {id:"m_p9", name:"Plasmodium species", time:"14", yield:9},
        {id:"m_p10", name:"Leishmaniasis", time:"6", yield:5},
        {id:"m_p11", name:"Trichomonas vaginalis", time:"6", yield:7},
        {id:"m_p12", name:"Intestinal nematodes", time:"13", yield:7},
        {id:"m_p13", name:"Tissue nematodes", time:"11.5", yield:5},
        {id:"m_p14", name:"Cestodes", time:"10.5", yield:5},
        {id:"m_p15", name:"Trematodes", time:"11", yield:5}
      ]
    },
    {
      id: "fungi", name: "Fungi", tier: 2, totalTime: "1h 28m",
      why: "Systemic, cutaneous, and opportunistic fungal infections[cite: 412, 413, 442, 473].",
      videos: [
        {id:"m_f1", name:"Histoplasmosis", time:"9.5", yield:8},
        {id:"m_f2", name:"Blastocycosis", time:"6", yield:7},
        {id:"m_f3", name:"Coccidioidomycons", time:"7.5", yield:7},
        {id:"m_f4", name:"Paracoccidioidomycosis", time:"5", yield:3},
        {id:"m_f5", name:"Malassezia furfur", time:"5", yield:5},
        {id:"m_f6", name:"Dermatophytes", time:"6", yield:5},
        {id:"m_f7", name:"Sporothria schenckii", time:"4.5", yield:6},
        {id:"m_f8", name:"Candida albicans", time:"13", yield:9},
        {id:"m_f9", name:"Aspergillus fumigatis", time:"11", yield:9},
        {id:"m_f10", name:"Cryptococcus neoformans", time:"9", yield:9},
        {id:"m_f11", name:"Mucormycosis", time:"6", yield:8},
        {id:"m_f12", name:"Preumocystis pneumonia", time:"5", yield:9}
      ]
    }
  ],

  // ── PIXORIZE ──
  pixorize: [
    {
      id: "vitamins", name: "Vitamins", tier: 1, totalTime: "3h 14m",
      why: "Covers all essential vitamins and deficiencies[cite: 667].",
      videos: [
        {id:"px_v1", name:"Vitamin B1 (Thiamine) Biochemistry", time:"07:20", yield:10},
        {id:"px_v2", name:"Vitamin B1 (Thiamine) Deficiency", time:"10:51", yield:10},
        {id:"px_v3", name:"Vitamin B2 (Riboflavin)", time:"06:30", yield:8},
        {id:"px_v4", name:"Vitamin B3 (Niacin) Biochemistry", time:"07:51", yield:9},
        {id:"px_v5", name:"Vitamin B3 (Niacin) Deficiency and Excess", time:"08:33", yield:9},
        {id:"px_v6", name:"Hartnup Disease", time:"05:58", yield:7},
        {id:"px_v7", name:"Vitamin B5 (Pantothenic Acid)", time:"05:34", yield:6},
        {id:"px_v8", name:"Vitamin B6 (Pyridoxine)", time:"10:15", yield:8},
        {id:"px_v9", name:"Vitamin B7 (Biotin)", time:"07:53", yield:7},
        {id:"px_v10", name:"Vitamin B9 (Folate)", time:"03:40", yield:9},
        {id:"px_v11", name:"Vitamin B12 (Cobalamin) Biochemistry", time:"07:03", yield:9},
        {id:"px_v12", name:"Vitamins B9 and B12 Deficiencies", time:"20:09", yield:10},
        {id:"px_v13", name:"Vitamin A (Retinol) Biochemistry", time:"09:24", yield:8},
        {id:"px_v14", name:"Vitamin A (Retinol) Deficiency and Excess", time:"09:17", yield:8},
        {id:"px_v15", name:"Vitamin C (Ascorbic Acid) Biochemistry", time:"08:06", yield:8},
        {id:"px_v16", name:"Vitamin C (Ascorbic Acid) Deficiency and Excess", time:"09:02", yield:8},
        {id:"px_v17", name:"Vitamin D Biochemistry", time:"11:42", yield:9},
        {id:"px_v18", name:"Vitamin D Deficiency and Excess", time:"11:37", yield:9},
        {id:"px_v19", name:"Vitamin E (Tocopherol)", time:"07:23", yield:7},
        {id:"px_v20", name:"Vitamin K Biochemistry", time:"06:53", yield:8},
        {id:"px_v21", name:"Vitamin K Deficiency", time:"06:35", yield:8},
        {id:"px_v22", name:"Kwashiorkor and Marasmus", time:"05:57", yield:7},
        {id:"px_v23", name:"Zinc", time:"06:59", yield:6}
      ]
    },
    {
      id: "lysosomal", name: "Lysosomal Storage Diseases", tier: 1, totalTime: "42m",
      why: "Covers Krabbe, Gaucher, and Tay-Sachs[cite: 667].",
      videos: [
        {id:"px_ls1", name:"Krabbe Disease", time:"04:43", yield:7},
        {id:"px_ls2", name:"Hurler and Hunter Syndromes", time:"07:54", yield:8},
        {id:"px_ls3", name:"Fabry Disease", time:"05:33", yield:8},
        {id:"px_ls4", name:"Tay-Sachs and Niemann-Pick", time:"07:16", yield:9},
        {id:"px_ls5", name:"Gaucher Disease", time:"03:53", yield:9},
        {id:"px_ls6", name:"Metachromatic Leukodystrophy", time:"04:45", yield:7},
        {id:"px_ls7", name:"I-Cell Disease", time:"08:52", yield:7}
      ]
    },
    {
      id: "chromosomal", name: "Chromosomal Abnormalities", tier: 1, totalTime: "57m",
      why: "Essential trisomies and imprinting[cite: 667].",
      videos: [
        {id:"px_ch1", name:"Down Syndrome (Trisomy 21)", time:"10:53", yield:10},
        {id:"px_ch2", name:"Edwards Syndrome (Trisomy 18)", time:"07:54", yield:8},
        {id:"px_ch3", name:"Patau Syndrome (Trisomy 13)", time:"06:22", yield:8},
        {id:"px_ch4", name:"Klinefelter Syndrome", time:"07:09", yield:8},
        {id:"px_ch5", name:"Turner Syndrome", time:"08:43", yield:9},
        {id:"px_ch6", name:"Williams Syndrome", time:"06:58", yield:7},
        {id:"px_ch7", name:"Cri du Chat Syndrome", time:"03:38", yield:7},
        {id:"px_ch8", name:"Imprinting", time:"05:31", yield:8}
      ]
    },
    {
      id: "b_t_cells", name: "B Cells and T Cells", tier: 1, totalTime: "2h 6m",
      why: "Complete immunology cell lifecycle[cite: 667].",
      videos: [
        {id:"px_bt1", name:"MHC 1", time:"07:56", yield:9},
        {id:"px_bt2", name:"MHC II", time:"10:13", yield:9},
        {id:"px_bt3", name:"B Cells: Overview", time:"06:47", yield:8},
        {id:"px_bt4", name:"B. Cells: Activation", time:"09:25", yield:9},
        {id:"px_bt5", name:"Plasma B Celis", time:"05:48", yield:8},
        {id:"px_bt6", name:"Memory B Celis", time:"05:27", yield:8},
        {id:"px_bt7", name:"T Cells Overview", time:"03:30", yield:8},
        {id:"px_bt8", name:"T Cells: Activation", time:"09:34", yield:9},
        {id:"px_bt9", name:"T Cells: Differentiation", time:"14:56", yield:9},
        {id:"px_bt10", name:"Cytotoxic (Killer) T Cells", time:"06:31", yield:8},
        {id:"px_bt11", name:"Helper T Cells: Overview", time:"06:42", yield:8},
        {id:"px_bt12", name:"Th1 Cells", time:"10:15", yield:9},
        {id:"px_bt13", name:"Th2 Cells", time:"11:14", yield:9},
        {id:"px_bt14", name:"Th17 Cells", time:"06:27", yield:8},
        {id:"px_bt15", name:"Regulatory T Celis (Tregs)", time:"11:15", yield:8}
      ]
    },
    {
      id: "biochem_path", name: "Biochemical Pathways", tier: 2, totalTime: "3h 5m",
      why: "Cycle logic for purines, urea, and catecholamines[cite: 667].",
      videos: [
        {id:"px_bp1", name:"Cori Cycle", time:"06:41", yield:8},
        {id:"px_bp2", name:"De Nov Purine Synthesis", time:"08:49", yield:8},
        {id:"px_bp3", name:"Pyruvate Metabolism", time:"11:12", yield:9},
        {id:"px_bp4", name:"Sorbitol (Polyol) Pathway", time:"10:18", yield:8},
        {id:"px_bp5", name:"Fatty Acid Synthesis", time:"05:08", yield:7},
        {id:"px_bp6", name:"Fatty Acid Breakdown", time:"07:01", yield:7},
        {id:"px_bp7", name:"Ethanol Metabolism", time:"12:41", yield:8},
        {id:"px_bp8", name:"Urea Cycle", time:"12:58", yield:9},
        {id:"px_bp9", name:"Purine Salvage", time:"11:31", yield:8},
        {id:"px_bp10", name:"Purine Excretion", time:"09:35", yield:8},
        {id:"px_bp11", name:"Catecholamine Synthesis", time:"19:01", yield:9},
        {id:"px_bp12", name:"De Nov Pyrimidine Synthesis", time:"21:04", yield:8},
        {id:"px_bp13", name:"Homocysteine Metabolism", time:"09:29", yield:8},
        {id:"px_bp14", name:"Alanine (Cahill) Cycle", time:"11:16", yield:8},
        {id:"px_bp15", name:"Heme Synthesis", time:"17:52", yield:9},
        {id:"px_bp16", name:"Galactose Metabolism", time:"11:14", yield:8}
      ]
    },
    {
      id: "metabolic", name: "Metabolic Disorders", tier: 2, totalTime: "1h 32m",
      why: "Covers PKU, Lesch-Nyhan, and Galactosemia[cite: 667, 668].",
      videos: [
        {id:"px_md1", name:"Albinism", time:"05:40", yield:7},
        {id:"px_md2", name:"Cystinuria", time:"07:38", yield:7},
        {id:"px_md3", name:"Maple Syrup Urine Disease", time:"06:54", yield:8},
        {id:"px_md4", name:"Essential Fructosuria", time:"03:49", yield:6},
        {id:"px_md5", name:"Hereditary Fructose intolerance", time:"07:07", yield:8},
        {id:"px_md6", name:"Ornithine Transcarbamylase Deficiency", time:"07:11", yield:8},
        {id:"px_md7", name:"Phenylketonuria (PKU)", time:"08:53", yield:9},
        {id:"px_md8", name:"Alkaptonuria", time:"06:36", yield:7},
        {id:"px_md9", name:"Galactosemia", time:"12:02", yield:8},
        {id:"px_md10", name:"Galactokinase Deficiency", time:"06:16", yield:7},
        {id:"px_md11", name:"Lesch-Nyhan Syndrome", time:"06:49", yield:9},
        {id:"px_md12", name:"Pyruvate Kinase Deficiency", time:"08:14", yield:8},
        {id:"px_md13", name:"Pyruvate Dehydrogenase Deficiency", time:"05:49", yield:8},
        {id:"px_md14", name:"Propionic Acidemia", time:"07:54", yield:8}
      ]
    }
  ]
};
