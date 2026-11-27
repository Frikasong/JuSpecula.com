// JuSpecula data. Every figure has a source listed on the Method page.
// Edit this file to update the site; index.html only reads it.
window.RATIO={
  // Episode 1: median hourly wage, lawyers (NOC 41101). Job Bank, updated Nov 2025.
  prov:[["Alberta",78.85],["NL",66.85],["Ontario",65.21],["BC",65.00],["New Brunswick",59.94],["Canada",59.76],["Saskatchewan",57.88],["PEI",57.69],["Nova Scotia",56.15],["Quebec",51.28],["Manitoba",47.18]],
  // Episode 1: base salary in CAD. New York converted at 1 USD = 1.40 CAD.
  pay:[{n:"Bay Street",a:135000,b:275000,al:"Year 1",bl:"Year 7"},{n:"New York",a:315000,b:588000,al:"Year 1",bl:"Top of scale"}],
  // Episode 2: Toronto 2L summer 2026 hires / class size. Ultra Vires survey.
  schools:[["U of T",84,232],["Western",59,198],["Osgoode",88,315],["Queen's",42,223],["Ottawa",39,280],["Dalhousie",20,170],["Windsor",31,282],["TMU",14,150],["McGill",15,180]],
  // Episode 2: Toronto 1L summer hires by summer year. Ultra Vires survey.
  oneL:[[2013,44],[2014,42],[2015,50],[2016,63],[2017,55],[2018,57],[2019,66],[2020,50],[2021,45],[2022,82],[2023,76],[2024,69],[2025,86],[2026,80]],
  // Episode 3: JD tuition per year, domestic (in-province) and international, CAD.
  tuition:[["U of T",33700,72790],["Queen's",21782,71082],["Calgary",18696,65514],["Osgoode",25298,48875],["UBC",14517,48180],["TMU",22921,42057]],
  // Lawyers page: SAMPLE profiles with made-up names and placeholder citations.
  law:[
    {n:"Counsel A",f:"Example LLP",c:"Toronto",ar:[["Commercial litigation",18],["Insolvency",9],["Contracts",6]],ct:"Ontario Superior Court (Commercial List), Court of Appeal",y:[3,5,7,9,8],r:[["Sample Co. v. Example Inc.","2025 ONSC 0001"],["Re Placeholder Holdings","2025 ONSC 0002"],["Demo Ltd. v. Test Corp.","2024 ONCA 0003"]]},
    {n:"Counsel B",f:"Demo Litigation LLP",c:"Toronto",ar:[["Employment",14],["Human rights",7],["Judicial review",4]],ct:"Ontario Superior Court, Divisional Court, HRTO",y:[4,4,6,5,6],r:[["Worker v. Sample Employer","2025 ONSC 0004"],["Applicant v. Example Board","2024 ONSC 0005"],["Employee v. Demo Inc.","2024 HRTO 0006"]]},
    {n:"Counsel C",f:"Sample & Partners",c:"Ottawa",ar:[["Immigration",22],["Judicial review",16],["Administrative",5]],ct:"Federal Court, Federal Court of Appeal",y:[9,8,10,12,11],r:[["Applicant v. Canada (Example)","2025 FC 0007"],["Sample v. Canada (Demo)","2025 FC 0008"],["Test v. Canada (Placeholder)","2024 FCA 0009"]]},
    {n:"Counsel D",f:"Example Tax Chambers",c:"Toronto",ar:[["Tax",12],["Judicial review",3],["Commercial litigation",2]],ct:"Tax Court of Canada, Federal Court of Appeal",y:[2,3,3,4,5],r:[["Sample Corp. v. The King","2025 TCC 0010"],["Example Ltd. v. The King","2024 TCC 0011"],["Demo Inc. v. The King","2024 FCA 0012"]]}
  ],
  // LTB section. Orders via A2AJ Canadian Legal Data (OGL-Ontario). Sample = 50 L1 orders issued 31 Jul 2026.
  ltb:{
    total:56186,
    figs:[["56,186","LTB orders published, Jan 2025 to Aug 2026"],["33 of 50","Rent cases in the sample filed by organisations"],["22 of 50","Recent orders mentioning Tenant Duty Counsel where the tenant had spoken to them"]],
    quotes:[
      {h:"Proof that a payment plan is affordable",q:"I am not persuaded the Tenant would be able to commit to a payment plan, as in this case the Tenant led no documentary evidence to support her testimony",f:"LTB-L-035530-26",d:"31 Jul 2026",u:"https://d3hf2qahezjxpx.cloudfront.net/attachments/exportedBinaries20260928_143512/069N300001531gxIAA/LTB-L-035530-26.pdf"},
      {h:"Repair issues disclosed in writing first",q:"The Tenant disputed the arrears based on issues which could have been raised under section 82(1)",f:"LTB-L-047053-26",d:"31 Jul 2026",u:"https://d3hf2qahezjxpx.cloudfront.net/attachments/exportedBinaries20260928_143512/069N30000152VPNIA2/LTB-L-047053-26-HR.pdf"},
      {h:"Showing up",q:"the Tenant was not present or represented at the hearing although properly served with notice of this hearing by the LTB",f:"LTB-L-015979-26",d:"31 Jul 2026",u:"https://d3hf2qahezjxpx.cloudfront.net/attachments/exportedBinaries20260928_143512/069N3000014WixcIAC/LTB-L-015979-26-HR-JULY%2031%2C%202026.pdf"}
    ],
    filers:[["CAPREIT (two partnerships)",2],["Concert Realty Services Ltd",2],["Homestead Land Holdings Limited",2],["bcIMC Realty Corporation c/o QuadReal",1],["Housing York Inc.",1]]
  },
  // Cases page: every decision in the A2AJ citation index that cites Zhang v. Chen, 2024 BCSC 285 (checked 26 Nov 2026).
  // [date, body, name, citation, url, ai] where ai = 1 if it cites the ruling on fabricated / AI-generated authorities
  // (read from the passage around each citation), 0 if it cites it for something else. LTB parties are not named.
  zc:[
    ["2024-08-12","TMOB","Industria de Diseño Textil v Ghassai","2024 TMOB 150","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/521575/index.do",1],
    ["2024-11-20","TMOB","Monster Energy v Pacific Smoke International","2024 TMOB 211","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/521634/index.do",1],
    ["2025-06-19","BCSC","J.R.V. v. N.L.V.","2025 BCSC 1137","https://www.bccourts.ca/jdb-txt/sc/25/11/2025BCSC1137.htm",1],
    ["2025-06-24","FC","Hussein v. Canada","2025 FC 1138","https://decisions.fct-cf.gc.ca/fc-cf/decisions/en/item/528455/index.do",1],
    ["2025-07-10","FC","Lloyd's Register Canada v. Choi","2025 FC 1233","https://decisions.fct-cf.gc.ca/fc-cf/decisions/en/item/528562/index.do",1],
    ["2025-09-03","FC","Tyler v. Canada (AG)","2025 FC 1457","https://decisions.fct-cf.gc.ca/fc-cf/decisions/en/item/531097/index.do",1],
    ["2025-10-03","FPSLREB","Delisle v. CAPE","2025 FPSLREB 131","https://decisions.fpslreb-crtespf.gc.ca/fpslreb-crtespf/d/en/item/521464/index.do",1],
    ["2025-10-21","BCCA","Wu v. Murray","2025 BCCA 365","https://www.bccourts.ca/jdb-txt/ca/25/03/2025BCCA0365.htm",1],
    ["2025-10-29","BCSC","I.A.M.M. v. H.F.S.S. (family costs)","2025 BCSC 2134","https://www.bccourts.ca/jdb-txt/sc/25/21/2025BCSC2134.htm",0],
    ["2025-12-19","TMOB","Nelligan O'Brien Payne v French","2025 TMOB 261","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/521917/index.do",1],
    ["2026-01-20","BCSC","Zou v. Miracon Development","2026 BCSC 85","http://www.courts.gov.bc.ca/jdb-txt/sc/26/00/2026BCSC0085.htm",1],
    ["2026-02-17","TMOB","14095863 Canada v Abercrombie & Fitch","2026 TMOB 28","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/521958/index.do",1],
    ["2026-02-17","TMOB","14095863 Canada v Abercrombie & Fitch","2026 TMOB 29","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/521955/index.do",1],
    ["2026-02-17","TMOB","Greco v Abercrombie & Fitch","2026 TMOB 30","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/521956/index.do",1],
    ["2026-03-11","BCSC","Krivaia v. Hungerford","2026 BCSC 408","http://www.courts.gov.bc.ca/jdb-txt/sc/26/04/2026BCSC0408.htm",1],
    ["2026-03-20","FC","National Indigenous Fisheries Institute v. Canada","2026 FC 382","https://decisions.fct-cf.gc.ca/fc-cf/decisions/en/item/530203/index.do",1],
    ["2026-05-14","CIRB","Humpherville","2026 CIRB 1250","https://decisia.lexum.com/cirb-ccri/cirb-ccri/en/item/524201/index.do",1],
    ["2026-06-04","FC","Djatsa v. Canada","2026 FC 729","https://decisions.fct-cf.gc.ca/fc-cf/decisions/en/item/530741/index.do",1],
    ["2026-06-11","FC","Béland c. Canada (PG), in French","2026 CF 779","https://decisions.fct-cf.gc.ca/fc-cf/decisions/fr/item/530790/index.do",1],
    ["2026-06-12","ONLSTH","Mazaheri v Law Society of Ontario","2026 ONLSTH 112","https://decisions.a2aj.ca/ONLSTH/2026-ONLSTH-112-EN.docx",1],
    ["2026-06-29","TMOB","14095863 Canada v Moosehead Breweries","2026 TMOB 122","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/522046/index.do",1],
    ["2026-06-29","TMOB","Chilly Moose v Moosehead Breweries","2026 TMOB 121","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/522047/index.do",1],
    ["2026-07-03","TMOB","14095863 Canada v Moosehead Breweries","2026 TMOB 133","https://decisions.opic-cipo.gc.ca/tmob-comc/decisions/en/item/522053/index.do",1],
    ["2026-07-10","ONLTB","Tenant application (parties not named)","LTB-T-020198-25","https://d3hf2qahezjxpx.cloudfront.net/attachments/exportedBinaries20260928_143512/069N3000013RllQIAS/LTB-T-020198-25-RV%20signed.pdf",1],
    ["2026-07-23","FC","Canada (Human Rights Commission) c. Canada (PG), in French","2026 CF 993","https://decisions.fct-cf.gc.ca/fc-cf/decisions/fr/item/531151/index.do",1],
    ["2026-09-28","FC","Ahmed v. Canada","2026 FC 1202","https://decisions.fct-cf.gc.ca/fc-cf/decisions/en/item/531515/index.do",1]
  ],
  zcBodies:[["TMOB","Trademarks Opposition Board","Trademarks Board"],["FC","Federal Court","Federal Court"],["BCSC","BC Supreme Court","BC Supreme Ct"],["BCCA","BC Court of Appeal","BC Appeal"],["FPSLREB","Federal Public Sector Labour Board","Fed. labour board"],["CIRB","Canada Industrial Relations Board","CIRB"],["ONLSTH","Law Society Tribunal (Ontario)","Law Society Trib."],["ONLTB","Landlord and Tenant Board (Ontario)","LTB"]],
  log:[
    ["27 Nov 2026","Ratio is now JuSpecula, Latin for the law's lookout: one place to watch the law, from legal market data and cases to legal tech and tools."],
    ["26 Nov 2026","Cases: a map of every decision that has cited Zhang v. Chen, from the A2AJ citation index. 25 of 26 cite it on AI-invented case law."],
    ["24 Nov 2026","Added the LTB section (prototype with real orders and sample counts) and Housekeeper v2.2 to Tools."],
    ["20 Nov 2026","Mock Interviewer now works with any AI — as a skill, an MCP server or one file to paste in — and its practice room has an interviewer who can ask follow-ups."],
    ["20 Nov 2026","Mock Interviewer restyled to match Ratio."],
    ["15 Nov 2026","Added hiring and tuition data, the first case card and this log."],
    ["14 Nov 2026","Built the first version of Ratio: data, cases, lawyers, tools, method."],
    ["7 Nov 2026","Published episode 3 of By the Numbers: what it costs to become a lawyer in Canada."],
    ["2 Nov 2026","Published episode 2: how hard it is to get into a big firm."],
    ["29 Oct 2026","Published episode 1: what Canadian lawyers earn, and why some go to New York."],
    ["27 Oct 2026","Published the first case explainer: Moffatt v. Air Canada."],
    ["22 Oct 2026","Wrote up Housekeeper, an evidence-organising tool for tenants and landlords without a lawyer."]
  ]
};
