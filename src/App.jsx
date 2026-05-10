import { useState, useRef } from "react";

/* ─── EXACT BRAND TOKENS FROM PARTNER DECK ─────────── */
const C = {
  navy:          "#1D4664",
  navyDark:      "#16374F",
  navyDeep:      "#0e1f2e",
  purple:        "#9474CC",
  purpleLight:   "#F0EBF9",
  teal:          "#73C0CA",
  tealLight:     "#EBF7F8",
  yellow:        "#FEC006",
  yellowLight:   "#FFF8E1",
  white:         "#FFFFFF",
  off:           "#F8FAFC",
  gray:          "#4A5568",
  border:        "#DDE3EA",
  text:          "#1D4664",
};

/* ─── ALL DATA ──────────────────────────────────────── */
const SHEETS_DEF = {
  Summary: {
    label: "Summary",
    columns: ["Category","Metric","Jan-22","Feb-22","Mar-22","Apr-22","May-22","Jun-22","Jul-22","Aug-22","Sep-22","Oct-22","Nov-22","Dec-22","Jan-23","Feb-23","Mar-23","Apr-23","May-23","Jun-23","Jul-23","Aug-23","Sep-23","Oct-23","Nov-23","Dec-23","Jan-24","Feb-24","Mar-24","Apr-24","May-24","Jun-24","Jul-24","Aug-24","Sep-24","Oct-24","Nov-24","Dec-24","Jan-25","Feb-25","Mar-25","Apr-25","May-25","Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25","Jan-26","Feb-26","Mar-26","Total"],
    rows: [
      ["IPGC Referral","#","0","0","1","2","2","0","1","12","4","0","2","0","1","4","0","0","2","0","1","1","3","0","0","1","0","0","0","1","0","1","1","0","0","0","0","0","0","0","1","0","0","1","1","0","0","1","1","2","2","0","1","50"],
      ["IPGC Referral","$","$0","$0","$5,000","$300","$5,150","$0","$2,500","$1,800","$15,150","$0","$5,150","$0","$150","$600","$0","$0","$7,500","$0","$5,000","$5,000","$15,000","$0","$0","$7,500","$0","$0","$0","$3,500","$0","$5,000","$5,000","$0","$0","$0","$0","$0","$0","$0","$5,000","$0","$0","$5,000","$5,000","$0","$0","$5,000","$5,000","$10,000","$10,000","$0","$5,000","$139,300"],
      ["IPED Referral","#","0","0","0","1","0","0","1","1","1","0","3","2","1","0","2","1","0","0","1","2","1","2","0","1","4","2","1","0","1","0","1","1","0","0","0","0","1","0","1","1","0","2","0","0","0","1","0","0","0","0","0","36"],
      ["IPED Referral","$","$0","$0","$0","$1,000","$0","$0","$1,000","$1,000","$1,000","$0","$4,500","$5,968","$1,495","$0","$1,900","$1,495","$0","$0","$1,500","$3,000","$1,500","$3,000","$0","$1,500","$9,750","$3,500","$1,750","$0","$1,500","$0","$1,500","$2,110","$0","$0","$0","$0","$1,732","$0","$750","$1,690","$0","$3,000","$0","$0","$0","$750","$0","$0","$0","$0","$0","$57,890"],
      ["PS Referral","#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","4","1","4","1","3","3","5","4","2","1","1","1","0","1","2","1","1","0","0","1","0","1","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","38"],
      ["PS Referral","$","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$10,000","$2,500","$10,000","$2,500","$7,500","$20,000","$25,000","$16,500","$5,000","$2,500","$5,000","$5,000","$0","$7,000","$10,000","$7,000","$2,500","$0","$0","$7,000","$0","$7,000","$0","$0","$0","$10,000","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$162,000"],
      ["Provider Sub","#","0","2","5","8","9","8","11","11","11","14","15","14","14","14","13","11","11","9","6","4","4","4","4","4","3","3","1","1","1","1","1","1","1","1","1","1","1","0","0","0","0","0","0","0","0","0","1","1","1","1","1","228"],
      ["Provider Sub","$","$0","$1,510","$3,220","$5,500","$6,070","$5,310","$7,400","$7,590","$7,590","$10,060","$10,820","$10,490","$10,970","$11,450","$10,170","$8,410","$9,410","$7,410","$4,660","$2,900","$2,900","$2,900","$2,900","$2,900","$2,330","$2,330","$760","$760","$760","$760","$760","$760","$760","$760","$760","$760","$760","$0","$0","$0","$0","$0","$0","$0","$0","$0","$99","$99","$99","$99","$99","$166,055"],
      ["IPGC Sub","#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","5","10","9","18","18","14","11","17","17","17","14","14","15","11","10","7","5","6","11","10","12","9","7","6","6","4","4","10","4","5","6","5","5","2","2","3","4","333"],
      ["IPGC Sub","$","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$495","$1,042","$1,042","$1,584","$1,584","$1,386","$891","$1,535","$1,436","$1,584","$1,587","$1,787","$2,086","$1,489","$1,490","$1,045","$846","$1,045","$1,371","$941","$859","$742","$664","$685","$745","$547","$547","$781","$547","$495","$474","$435","$495","$198","$198","$287","$386","$35,351"],
      ["IPED Sub","#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","2","4","10","8","5","2","4","4","6","6","8","6","9","6","7","6","4","7","8","9","6","5","4","5","3","3","3","4","1","2","1","5","4","3","3","2","176"],
      ["IPED Sub","$","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$99","$198","$396","$990","$792","$396","$297","$396","$347","$594","$545","$693","$495","$891","$549","$693","$594","$396","$633","$552","$591","$414","$375","$276","$435","$237","$237","$237","$276","$99","$198","$99","$495","$396","$287","$287","$198","$15,683"],
      ["SD Recruitment","#","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","32"],
      ["SD Recruitment","$","$0","$0","$0","$0","$0","$0","$0","$0","$9,700","$0","$0","$0","$0","$0","$0","$0","$0","$0","$5,200","$6,669","$4,914","$9,136","$6,084","$6,077","$6,084","$6,084","$5,744","$6,084","$8,424","$6,084","$6,084","$6,084","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$98,452"],
      ["GC Cases","#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2","1","0","1","3","1","0","1","3","0","1","0","0","1","2","0","0","1","0","0","1","0","1","1","0","2","1","2","0","0","0","0","1","2","0","28"],
      ["GC Cases","$","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$56,000","$28,000","$0","$32,000","$89,000","$32,000","$0","$32,000","$98,800","$0","$35,000","$0","$0","$35,000","$70,000","$0","$0","$30,000","$0","$0","$33,250","$0","$35,000","$35,000","$0","$70,000","$35,000","$73,000","$0","$0","$0","$0","$38,000","$76,000","$0","$933,050"],
      ["ED Cases","#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2","0","0","1","1","0","0","0","0","0","0","0","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","6"],
      ["ED Cases","$","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$7,500","$0","$0","$8,000","$5,000","$0","$0","$0","$0","$0","$0","$0","$2,000","$1,500","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$0","$24,000"],
      ["TOTAL","$","$0","$1,510","$8,220","$6,800","$11,220","$5,310","$10,900","$10,390","$33,440","$10,060","$20,470","$16,458","$12,615","$12,050","$22,664","$13,645","$84,348","$40,484","$26,236","$71,351","$139,502","$65,467","$15,767","$54,655","$131,596","$19,394","$45,835","$27,724","$27,723","$55,582","$87,284","$10,395","$2,764","$39,253","$2,210","$8,916","$38,781","$2,461","$41,930","$47,474","$784","$79,018","$40,823","$73,594","$672","$6,284","$6,089","$10,693","$48,584","$76,673","$5,683","$1,631,780"],
    ],
  },
  "IPGC Referral": {
    label: "IPGC Referral",
    columns: ["Company","IP","Meeting Date","Invoice Date","Payment Date","Payment Month","Type","Amount","Status","Comment"],
    rows: [
      ["The Eggceptional Donor Group","Tony Jin","Jul 10, 2021","Aug 23, 2021","Aug 23, 2021","August 2021","Success","$2,500","Paid",""],
      ["Harvest Babies Surrogacy","Rabi Soltani","Nov 9, 2021","Dec 27, 2021","-","-","Success","$0","Paid","$5000 Refunded"],
      ["Omega Family Global","Miki Ben","Nov 18, 2021","Mar 1, 2022","Mar 1, 2022","March 2022","Success","$5,000","Paid",""],
      ["Genesis Group","Nella Shapiro","March 15, 2022","April 10, 2022","May 9, 2022","May 2022","Meeting","$150","Paid",""],
      ["USA Surrogacy International","Nella Shapiro","March 2, 2022","April 10, 2022","February 23, 2023","February 2023","Meeting","$150","Paid",""],
      ["Eternal Spring","Andrea A","April 15, 2022","May 9, 2022","May 13, 2022","May 2022","Meeting","$150","Paid",""],
      ["Extraordinary Conceptions","Marquita Shaw","May 2022","May 30, 2022","Jun 3, 2022","June 2022","Success","$5,000","Paid",""],
      ["Eggceptional Fertility","Amanda Horne","July 2022","July 26, 2022","Oct 18, 2022","October 2022","Success","$2,500","Paid",""],
      ["Prime Genetics","Ann .","August 2022","August 1, 2022","September 12, 2022","September 2022","Meeting","$150","Paid",""],
      ["Joy of Life Surrogacy","Hanqing Qiu","August 2022","Aug 12, 2022","Oct 27, 2022","October 2022","Meeting","$150","Paid",""],
      ["Prime Genetics","Betsy Eapen","June 20, 2022","August 16, 2022","August 18, 2022","August 2022","Meeting","$150","Paid",""],
      ["Prime Genetics","Keri","July 18, 2022","August 16, 2022","August 18, 2022","August 2022","Meeting","$150","Paid",""],
      ["Prime Genetics","Hanqing Qiu","July 29, 2022","August 16, 2022","August 18, 2022","August 2022","Meeting","$150","Paid",""],
      ["Eternal Spring","Stephanie Knight","June 2022","August 16, 2022","August 25, 2022","August 2022","Meeting","$150","Paid",""],
      ["Eternal Spring","Mitzie Shaver","July 1, 2022","August 16, 2022","August 25, 2022","August 2022","Meeting","$150","Paid",""],
      ["Surmom","Tahira .","August 2022","Aug 17, 2022","Sep 12, 2022","September 2022","Meeting","$150","Paid",""],
      ["Surmom","Shilpi Kolluru","August 2022","August 18, 2022","Sep 12, 2022","September 2022","Meeting","$150","Paid",""],
      ["Surrogate Alternatives","Cynthia Ceil","September 2022","September 12, 2022","Oct 26, 2022","October 2022","Success","$5,000","Paid",""],
      ["Family Creations","Joshua Yue","August 2022","September 12, 2022","Dec 12, 2022","December 2022","Success","$5,000","Paid",""],
      ["Road to Baby","Shruti Anupam","September 2022","September 14, 2022","Dec 14, 2022","December 2022","Success","$5,000","Paid",""],
      ["Eternal Spring","Jerome Person","August 2022","Aug 22, 2022","March 25, 2023","March 2023","Meeting","$150","Paid",""],
      ["Surmom","Jerome Person","September 2022","September 20, 2022","October 26, 2022","October 2022","Meeting","$150","Paid",""],
      ["Eternal Spring","Tal Pal","October 2022","November 8, 2022","November 15, 2022","November 2022","Meeting","$150","Paid",""],
      ["Extraordinary Conceptions","Betsy Eapen","November 2022","November 30, 2022","Feb 10, 2023","February 2023","Success","$5,000","Paid",""],
      ["USA Surrogacy International","Kai Zhao","December 12, 2022","January 12, 2023","February 23, 2023","February 2023","Meeting","$150","Paid",""],
      ["Joy of Life Surrogacy","Henry Chong","January 18, 2023","February 7, 2023","February 14, 2023","February 2023","Meeting","$150","Paid",""],
      ["ISIS Clinic","Asya .","January 12, 2023","February 7, 2023","March 6, 2023","March 2023","Meeting","$150","Paid",""],
      ["Genesis Group","Rohit Taklikar","January 4, 2023","February 7, 2023","Jun 5, 2023","June 2023","Meeting","$150","Paid",""],
      ["Genesis Group","Kai Zhao","January 4, 2023","February 7, 2023","Jun 5, 2023","June 2023","Meeting","$150","Paid",""],
      ["Eggceptional Fertility","Marina Bekker","April 2023","May 1, 2023","May 23, 2023","May 2023","Success","$2,500","Paid",""],
      ["Pitter Patter","Lina Sampat","April 2023","May 16, 2023","June 3, 2023","June 2023","Success","$5,000","Paid",""],
      ["Omega Family Global","Madeleine Monica","April 11, 2023","July 4, 2023","August 11, 2023","August 2023","Success","$5,000","Paid",""],
      ["Eggceptional Fertility","Giannie de Cardenas","May 26, 2023","August 8, 2023","August 9, 2023","August 2023","Success","$5,000","Paid",""],
      ["Eggceptional Fertility","Lital Lev Ary","June 21, 2023","September 26, 2023","October 30, 2023","October 2023","Success","$5,000","Paid",""],
      ["Family Creations","Arash Ayromloo","January 16, 2023","September 28, 2023","October 2, 2023","October 2023","Success","$5,000","Paid",""],
      ["Family Creations","Danielle Honig","July 8, 2022","September 28, 2023","October 2, 2023","October 2023","Success","$5,000","Paid",""],
      ["Our Fairy Godmother","Matan & Gilad","June 23, 2023","December 12, 2023","December 13, 2023","Dec 2023","Success","$3,750","Paid","1/2"],
      ["Our Fairy Godmother","Matan & Gilad","June 23, 2023","December 12, 2023","December 15, 2023","Dec 2023","Success","$3,750","Paid","2/2"],
      ["Surrogate Alternatives","Warren Wong","March 25, 2024","June 26, 2024","Jul 12, 2024","July 2024","Success","$5,000","Paid",""],
      ["Surrogate Alternatives","Yasmin Naghash","April 4, 2024","July 10, 2024","Jul 12, 2024","July 2024","Success","$5,000","Paid",""],
      ["Intermountain Surrogacy Collective","Amy Burrows","January 6, 2025","March 10, 2025","March 14, 2025","March 2025","Success","$5,000","Paid",""],
      ["Family Creations","Matthew Geers","February 26, 2025","May 27, 2025","June 13, 2025","June 2025","Success","$5,000","Paid",""],
      ["Bumps & Blessings","Jessica Wolff","May 25, 2024","July 5, 2025","July 5, 2025","July 2025","Success","$2,500","Paid","1/2"],
      ["Bumps & Blessings","Jessica Wolff","May 25, 2024","July 5, 2025","July 8, 2025","July 2025","Success","$2,500","Paid","2/2"],
      ["Egg Donor & Surrogacy Institute","Meghan & Matthew Fencer","October 20, 2025","November 13, 2025","November 14, 2025","November 2025","Success","$5,000","Paid","2/2"],
      ["Our Fairy Godmother","Danielle Attus","November 7, 2025","December 23, 2025","December 30, 2025","Dec 2025","Success","$5,000","Paid","1/1"],
      ["Dakota Surrogacy","Manmeet","August 20, 2025","December 25, 2025","January 12, 2026","Jan 2026","Success","$1,250","Paid","1/4"],
      ["Expect Miracles Surrogacy","NIvi Baral","October 2, 2025","October 21, 2025","January 26, 2026","Jan 2026","Success","$5,000","Paid","1/1"],
      ["Eggceptional Fertility","Jessica Schwartz","December 23, 2025","January 26, 2026","January 26, 2026","Jan 2026","Success","$5,000","Paid","1/1"],
      ["Dakota Surrogacy","Manmeet","August 20, 2025","January 26, 2026","February 12, 2026","Feb 2026","Success","$1,250","Paid","2/4"],
      ["Shining Light Baby","Celi Arias","February 14, 2026","March 24, 2026","March 24, 2026","Mar 2026","Success","$5,000","Paid","1/1"],
      ["Egg Donor & Surrogacy Institute","Ohad Folman","December 11, 2025","April 7, 2026","April 14, 2026","Apr 2026","Success","$5,000","Paid","1/1"],
      ["Dakota Surrogacy","Manmeet","August 20, 2025","April 23, 2026","April 23, 2026","Apr 2026","Success","$2,500","Paid","3/4 4/4"],
      ["Expect Miracles Surrogacy","Dana Bhasin","October 6, 2025","March 24, 2026","April 28, 2026","Apr 2026","Success","$5,000","Paid","1/1"],
      ["Egg Donor & Surrogacy Institute","Jennifer & Salar","March 22, 2026","April 24, 2026","April 27, 2026","April 2026","Success","$5,000","Paid","1/1"],
      ["Egg Donor & Surrogacy Institute","Xing Tang","March 25, 2026","April 24, 2026","April 29, 2026","April 2026","Success","$5,000","Paid","1/1"],
    ],
  },
  "IPED Referral": {
    label: "IPED Referral",
    columns: ["Company","IP","Related Month","Invoice Date","Payment Date","Payment Month","Type","Amount","Status","Comment"],
    rows: [
      ["Traveling Donors","Kimberly Walz","September 2021","Dec 16, 2021","Dec 21, 2021","Dec 2021","Success","$1,000","Paid",""],
      ["Eggceptional Fertility","Jackie Jones","April 2022","Apr 19, 2022","Apr 27, 2022","Apr 2022","Success","$1,000","Paid",""],
      ["Traveling Donors","Adam & Nimrod","June 2022","Jul 25, 2022","Aug 15, 2022","Aug 2022","Success","$1,000","Paid",""],
      ["Traveling Donors","Or & Elad","June 2022","Aug 14, 2022","Oct 6, 2022","Oct 2022","Success","$1,000","Paid",""],
      ["Traveling Donors","Assaf & Ben","September 2022","Sep 21, 2022","Oct 6, 2022","Oct 2022","Success","$1,000","Paid",""],
      ["Exquisite Egg Donors","Ran & Itai","October 2022","Nov 15, 2022","Nov 17, 2022","Nov 2022","Success","$2,400","Paid",""],
      ["Family Creations LLC","David & Dvir","November 2022","Nov 29, 2022","Dec 5, 2022","Dec 2022","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Noga Millman","December 2022","Dec 14, 2022","Dec 29, 2022","Dec 2022","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Ran & Itai","October 2022","Dec 14, 2022","Dec 29, 2022","Dec 2022","Success","$2,910","Paid",""],
      ["Andron Biomed Couriers","Ran & Itai","December 2022","Dec 14, 2022","Mar 23, 2023","Mar 2023","Success","$350","Paid",""],
      ["Exquisite Egg Donors","Pitter & Asya","January 2023","Jan 26, 2023","Jan 24, 2023","Jan 2023","Success","$1,495","Paid",""],
      ["Exquisite Egg Donors","Atara","March 2023","Mar 16, 2023","Mar 26, 2023","Mar 2023","Success","$1,500","Paid",""],
      ["Pitter & Asya","-","March 2023","Mar 21, 2023","Mar 21, 2023","Mar 2023","Success","$400","Paid","trust services"],
      ["Exquisite Egg Donors","Pitter & Asya","January 2023","Apr 13, 2023","Apr 13, 2023","Apr 2023","Success","$1,495","Paid",""],
      ["Exquisite Egg Donors","Udi","March 2023","Jul 9, 2023","Jul 13, 2023","Jul 2023","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Galit Wodeslavsky","January 2023","Aug 12, 2023","Aug 16, 2023","Aug 2023","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Latasha Bowden","June 2023","Aug 27, 2023","Sep 7, 2023","Sep 2023","Success","$1,500","Paid",""],
      ["Futura Egg Donation","Yishai Avior","June 2023","Sep 26, 2023","Sep 26, 2023","Sep 2023","Success","$1,500","Paid",""],
      ["Family Creations","Aldirene Rocha","July 2022","Oct 5, 2023","Oct 5, 2023","Oct 2023","Success","$1,500","Paid",""],
      ["Family Creations","Elias","May 2022","Oct 5, 2023","Oct 5, 2023","Oct 2023","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Sigalit Stell","November 2023","Dec 6, 2023","Dec 10, 2023","Dec 2023","Success","$1,500","Paid",""],
      ["Family Creations","Olya","October 2023","Jan 10, 2024","Jan 10, 2024","Jan 2024","Success","$1,500","Paid",""],
      ["Amit & Adi","-","January 2024","Jan 22, 2024","Jan 23, 2024","Jan 2024","Success","$2,000","Paid","1/2"],
      ["Pitter & Asya","-","January 2024","Jan 10, 2024","Jan 25, 2024","Jan 2024","Success","$1,750","Paid","1/2"],
      ["Exquisite Egg Donors","Amit Levin","January 2024","Jan 30, 2024","Feb 7, 2024","Feb 2024","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Reut & Ohad","January 2024","Jan 30, 2024","Feb 7, 2024","Feb 2024","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Pitter & Asya","January 2024","Jan 31, 2024","Feb 14, 2024","Feb 2024","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Dadi","October 2022","Feb 8, 2024","Feb 14, 2024","Feb 2024","Success","$1,500","Paid",""],
      ["Amit & Adi","-","January 2024","Feb 15, 2024","Feb 17, 2024","Feb 2024","Success","$2,000","Paid","2/2"],
      ["Pitter & Asya","-","January 2024","Mar 3, 2024","Mar 6, 2024","Mar 2024","Success","$1,750","Paid","2/2"],
      ["Exquisite Egg Donors","Alita Mor","June 2023","May 25, 2024","Jun 4, 2024","Jun 2024","Success","$1,500","Paid",""],
      ["Exquisite Egg Donors","Avihu & Ygal","March 2024","Jul 24, 2024","Jul 30, 2024","Jul 2024","Success","$1,500","Paid",""],
      ["Genesis Fertility Clinic","Avihu & Ygal","March 2024","Aug 7, 2024","Aug 14, 2024","Aug 2024","Success","$2,110","Paid",""],
      ["Exquisite Egg Donors","Ofra","May 2024","Oct 28, 2024","Oct 30, 2024","Oct 2024","Success","$1,500","Paid",""],
      ["Genesis Fertility Clinic","Ofra","June 2024","Jan 31, 2025","Feb 13, 2025","Feb 2025","Success","$1,732","Paid",""],
      ["Eggceptional Fertility","Gabriele & Nadav","Jan 26, 2025","Mar 26, 2025","Apr 1, 2025","Apr 2025","Success","$750","Paid","1/2"],
      ["Exquisite Egg Donors","Itai & Elran","Dec 24, 2024","Apr 16, 2025","Apr 17, 2025","Apr 2025","Success","$1,690","Paid",""],
      ["Exquisite Egg Donors","Alon & Gil","May 8, 2025","Jun 19, 2025","Jul 13, 2025","Jul 2025","Success","$1,752","Paid",""],
      ["Family Creations","Or Netter","May 13, 2025","Jun 11, 2025","Jun 13, 2025","Jun 2025","Success","$1,500","Paid",""],
      ["Eggceptional Fertility","Gabriele & Nadav","Jan 26, 2025","Oct 16, 2025","Oct 21, 2025","Oct 2025","Success","$750","Paid","2/2"],
    ],
  },
  "PS Referral": {
    label: "PS Referral",
    columns: ["Company","PS","Referral Date","Invoice Date","Payment Date","Payment Month","Type","Amount","Status","Comment"],
    rows: [
      ["Road to Baby LLC","Tiffany Feltman","Jan 29, 2023","Mar 16, 2023","May 11, 2023","May 2023","Success","$2,500","Paid","1/2"],
      ["Omega Family Global","Jessica Rodriguez","Nov 21, 2022","Mar 23, 2023","Apr 5, 2023","Apr 2023","Success","$2,500","Paid","1/2"],
      ["Omega Family Global","Maribel Mejia","Dec 3, 2022","Mar 23, 2023","Apr 14, 2023","Apr 2023","Success","$2,500","Paid","1/2"],
      ["Road to Baby LLC","Alexandra Kirsch","Feb 22, 2023","Mar 26, 2023","May 25, 2023","May 2023","Success","$2,500","Paid","1/2"],
      ["Pitter Patter Surrogacy","Belita Evans","Jan 17, 2023","Apr 7, 2023","Apr 10, 2023","Apr 2023","Success","$2,500","Paid","1/2"],
      ["Road to Baby LLC","Cameron Jessica","Feb 11, 2023","May 16, 2023","May 25, 2023","May 2023","Success","$2,500","Paid","1/2"],
      ["Road to Baby LLC","Tiffany Feltman","Jan 29, 2023","May 25, 2023","May 25, 2023","May 2023","Success","$2,500","Paid","2/2"],
      ["Road to Baby LLC","Tali Santiago","Mar 7, 2023","May 25, 2023","May 25, 2023","May 2023","Success","$2,500","Paid","1/2"],
      ["Surro Connections","Chava Borner","Mar 4, 2023","May 28, 2023","Jun 7, 2023","Jun 2023","Success","$2,500","Paid","1/2"],
      ["Road to Baby LLC","Jessica Lynn McDoodle","Apr 12, 2023","Jun 15, 2023","Jun 22, 2023","Jun 2023","Success","$2,500","Paid","1/2"],
      ["Omega Family Global","Raisa Valerio","Nov 21, 2022","Jul 4, 2023","Aug 11, 2023","Aug 2023","Success","$2,500","Paid","1/2"],
      ["Road to Baby LLC","Jessica Lynn McDoodle","Apr 12, 2023","Jul 17, 2023","Jul 25, 2023","Jul 2023","Success","$2,500","Paid","2/2"],
      ["Road to Baby LLC","Cameron Jessica","Feb 11, 2023","September 26, 2023","October 6, 2023","Oct 2023","Success","$2,500","Paid","2/2"],
      ["Road to Baby LLC","Tali Santiago","Mar 7, 2023","October 5, 2023","October 6, 2023","Oct 2023","Success","$2,500","Paid","2/2"],
      ["Pitter Patter Surrogacy","Kylianne Dube","Feb 24, 2023","Dec 12, 2023","Dec 14, 2023","Dec 2023","Success","$5,000","Paid","1/1"],
      ["Mike Fayfel","Danielle Maltese","June 1, 2023","August 9, 2023","August 9, 2023","Aug 2023","Success","$7,500","Paid","1/2"],
      ["Mike Fayfel","Danielle Maltese","June 1, 2023","August 16, 2023","August 17, 2023","Aug 2023","Success","$7,500","Paid","2/2"],
      ["Our Fairy Godmother","Emmanuela Gay","April 6, 2023","August 25, 2023","August 29, 2023","Aug 2023","Success","$5,000","Paid","1/1"],
      ["Gestacy LLC","McKenzie Turner","March 21, 2023","September 6, 2023","September 8, 2023","Sep 2023","Success","$5,000","Paid","1/1"],
      ["Our Fairy Godmother","Andrenne Grimes","April 13, 2023","September 13, 2023","September 15, 2023","Sep 2023","Success","$5,000","Paid","1/1"],
      ["Our Fairy Godmother","Lacy Hoover","March 28, 2023","September 13, 2023","September 26, 2023","Sep 2023","Success","$5,000","Paid","1/1"],
      ["Our Fairy Godmother","Mary Schwank","June 23, 2023","September 26, 2023","September 30, 2023","Sep 2023","Success","$7,500","Paid","1/1"],
      ["PrimaVita Surrogacy","Aigner Griffin","October 4, 2023","October 6, 2023","October 12, 2023","Oct 2023","Success","$7,000","Paid","1/1"],
      ["Our Fairy Godmother","Aigner Griffin","October 21, 2023","October 27, 2023","October 27, 2023","Oct 2023","Success","$3,500","Paid","1/2"],
      ["Our Fairy Godmother","Aigner Griffin","October 21, 2023","October 27, 2023","October 28, 2023","Oct 2023","Success","$3,500","Paid","2/2"],
      ["Our Fairy Godmother","Jana Nicole","October 20, 2023","November 26, 2023","November 27, 2023","Nov 2023","Success","$2,500","Paid","1/2"],
      ["Our Fairy Godmother","Jana Nicole","October 20, 2023","November 26, 2023","November 27, 2023","Nov 2023","Success","$2,500","Paid","2/2"],
      ["Omega Family Global","Maria Marte","May 26, 2023","January 24, 2024","January 25, 2024","Jan 2024","Success","$2,500","Paid","1/2"],
      ["Omega Family Global","Maria Marte","May 26, 2023","July 11, 2024","July 18, 2024","Jul 2024","Success","$2,500","Paid","2/2"],
      ["Our Fairy Godmother","Brittney Navarro","November 23, 2023","February 27, 2024","February 27, 2024","Feb 2024","Success","$5,000","Paid","1/1"],
      ["Our Fairy Godmother","Susan Adams","April 2, 2024","April 17, 2024","April 17, 2024","Apr 2024","Success","$3,500","Paid","1/2"],
      ["Our Fairy Godmother","Susan Adams","April 2, 2024","April 17, 2024","April 19, 2024","Apr 2024","Success","$3,500","Paid","2/2"],
      ["OneWorld Generations","Mariyah Bradstreet","June 21, 2023","April 15, 2024","April 18, 2024","Apr 2024","Success","$3,500","Paid","1/3"],
      ["Our Fairy Godmother","Hanna Kirlin","May 1, 2024","May 29, 2024","June 13, 2024","Jun 2024","Success","$5,000","Paid","1/1"],
      ["Our Fairy Godmother","Takecia Coleman","April 9, 2024","May 29, 2024","June 14, 2024","Jun 2024","Success","$5,000","Paid","1/1"],
      ["Our Fairy Godmother","Kaila Blau","February 27, 2024","June 27, 2024","June 27, 2024","Jun 2024","Success","$3,500","Paid","1/2"],
      ["Our Fairy Godmother","Kaila Blau","February 27, 2024","June 27, 2024","June 28, 2024","Jun 2024","Success","$3,500","Paid","2/2"],
      ["Our Fairy Godmother","Jennifer Azurin","December 2, 2024","December 10, 2024","December 14, 2024","Dec 2024","Success","$3,500","Paid","1/2"],
      ["Our Fairy Godmother","Jennifer Azurin","December 2, 2024","December 10, 2024","December 14, 2024","Dec 2024","Success","$3,500","Paid","2/2"],
      ["Genesis Group","Teri Hawkins","October 23, 2024","December 25, 2024","January 7, 2025","Jan 2025","Success","$7,000","Paid","2/2"],
      ["International Surrogacy Center","Lindsey Zivalic","March 21, 2025","April 1, 2025","April 2, 2025","Apr 2025","Success","$10,000","Paid","2/2"],
    ],
  },
  "GC Cases": {
    label: "GC Cases",
    columns: ["IP","Signed Date","Total Agreement","Pmt #","Amount","Remains","Invoice Date","Payment Date","Payment Month","Status","Comment"],
    rows: [
      ["Henry & Bessie","May 17, 2023","$28,000","1","$10,000","$18,000","May 19, 2023","May 24, 2023","May 2023","Paid","1/5"],
      ["Henry & Bessie","May 17, 2023","$28,000","2","$6,000","$12,000","Jul 27, 2023","Aug 16, 2023","Aug 2023","Paid","2/5"],
      ["Betsy Malicakal Eapen","May 26, 2023","$28,000","1","$2,000","$26,000","-","Jun 19, 2023","Jun 2023","Paid","1/6"],
      ["Larisa & Michael Tingle","Jun 7, 2023","$28,000","1","$10,000","$18,000","-","Jun 12, 2023","Jun 2023","Paid","1/5"],
      ["Larisa & Michael Tingle","Jun 7, 2023","$28,000","2","$10,000","$8,000","-","Aug 24, 2023","Aug 2023","Paid","2/5"],
      ["Ashley & John Silvester","Aug 30, 2023","$32,000","1","$9,000","$23,000","Aug 31, 2023","Sep 13, 2023","Sep 2023","Paid","1/5"],
      ["Ashley & John Silvester","Aug 30, 2023","$32,000","2","$990","$22,010","Aug 31, 2023","Sep 22, 2023","Sep 2023","Paid","2/5"],
      ["Perla Vandana & Grandhi Srinivas","Sep 26, 2023","$28,000","1","$20,000","$8,000","Sep 2, 2023","Sep 7, 2023","Sep 2023","Paid","1/2"],
      ["Chaya Kohn & Moisey Khaimov","Sep 17, 2023","$32,000","1","$5,000","$27,000","Sep 17, 2023","Sep 19, 2023","Sep 2023","Paid","1/4"],
      ["Molly & Patrick","Sep 30, 2023","$29,000","1","$20,000","$9,000","Oct 2, 2023","Nov 5, 2023","Nov 2023","Paid","1/4"],
      ["Tachung Sun & Chih-Peng","Oct 30, 2023","$32,000","1","$5,000","$27,000","Oct 30, 2023","Oct 31, 2023","Oct 2023","Paid","1/5"],
      ["Chaya Kohn & Moisey Khaimov","Sep 17, 2023","$32,000","2","$10,000","$17,000","Nov 27, 2023","Nov 28, 2023","Nov 2023","Paid","2/4"],
      ["Molly Kingston","Dec 7, 2023","$32,000","1","$5,000","$27,000","Dec 7, 2023","Dec 18, 2023","Dec 2023","Paid","1/4"],
      ["Tachung Sun & Chih-Peng","Oct 30, 2023","$32,000","2","$5,000","$22,000","Dec 19, 2023","Jan 5, 2024","Jan 2024","Paid","2/5"],
      ["Molly Kingston II","Jan 8, 2024","$28,800","1","$5,000","$23,800","Jan 8, 2024","Jan 9, 2024","Jan 2024","Paid","1/4"],
      ["Paris & Lotan","Jan 19, 2024","$35,000","1","$5,000","$30,000","Jan 17, 2024","Jan 19, 2024","Jan 2024","Paid","1/3"],
      ["Warren & Dee","Jan 31, 2024","$35,000","1","$5,000","$30,000","Jan 26, 2024","Jan 26, 2024","Jan 2024","Paid","1/3"],
      ["Paris & Lotan","Jan 19, 2024","$35,000","2","$15,000","$15,000","Jan 29, 2024","Feb 2, 2024","Feb 2024","Paid","2/3"],
      ["Molly & Patrick","Sep 30, 2023","$29,000","3","$5,000","$4,000","Jan 31, 2024","Feb 23, 2024","Feb 2024","Paid","3/4"],
      ["Tachung Sun & Chih-Peng","Oct 30, 2023","$32,000","3","$5,000","$17,000","Feb 12, 2024","Feb 14, 2024","Feb 2024","Paid","2/5"],
      ["Tachung Sun & Chih-Peng","Oct 30, 2023","$32,000","4","$13,000","$4,000","Mar 3, 2024","Mar 5, 2024","Mar 2024","Paid","2/5"],
      ["Sandra & Roland","Mar 20, 2024","$35,000","1","$20,000","$15,000","Mar 20, 2024","Mar 29, 2024","Mar 2024","Paid","1/2"],
      ["Molly & Patrick","Sep 30, 2023","$29,000","4","$4,000","$0","Apr 24, 2024","Apr 30, 2024","Apr 2024","Paid","4/4"],
      ["Ashley & John Silvester","Aug 30, 2023","$32,000","3","$10,000","$12,010","Apr 24, 2024","Jun 4, 2024","Jun 2024","Paid","3/5"],
      ["Elana & Yitzchak","Jul 1, 2024","$35,000","1","$5,000","$30,000","Jun 30, 2024","Jul 4, 2024","Jul 2024","Paid","1/3"],
      ["Caroline & Stephane","Jul 16, 2024","$35,000","1","$5,000","$30,000","Jul 16, 2024","Jul 17, 2024","Jul 2024","Paid","1/3"],
      ["Perla Vandana & Grandhi Srinivas","Sep 26, 2023","$28,000","2","$8,000","$0","Jul 19, 2024","Jul 19, 2024","Jul 2024","Paid","2/2"],
      ["Leigh & Dan","Jul 29, 2024","$35,000","1","$5,000","$30,000","Jul 29, 2024","Jul 29, 2024","Jul 2024","Paid","1/3"],
      ["Elana & Yitzchak","Jul 1, 2024","$35,000","2","$15,000","$0","Jul 30, 2024","Jul 31, 2024","Jul 2024","Paid","2/3"],
      ["Leigh & Dan","Jul 29, 2024","$35,000","2","$15,000","$15,000","Sep 22, 2024","Sep 24, 2024","Sep 2024","Paid","1/3"],
      ["Caroline & Stephane","Jul 16, 2024","$35,000","2","$15,000","$15,000","Oct 24, 2024","Oct 26, 2024","Oct 2024","Paid","2/3"],
      ["Kristen & Tyler","Oct 31, 2024","$30,000","1","$5,000","$25,000","Nov 2, 2024","Nov 3, 2024","Nov 2024","Paid","2/3"],
      ["Paris & Lotan","Jan 19, 2024","$35,000","3","$15,000","$0","Oct 28, 2024","Nov 5, 2024","Nov 2024","Paid","3/3"],
      ["Kristen & Tyler","Oct 31, 2024","$30,000","2","$15,000","$10,000","Dec 13, 2024","Dec 14, 2024","Dec 2024","Paid","3/3"],
      ["Tachung Sun & Chih-Peng","Oct 30, 2023","$32,000","5","$13,000","$0","Jan 23, 2025","Jan 24, 2025","Jan 2025","Paid","5/5"],
      ["Atara & Heyim","Jan 31, 2025","$33,250","1","$20,000","$13,250","Jan 31, 2025","Feb 3, 2025","Feb 2025","Paid","1/2"],
      ["Sabel & Jordan","Apr 18, 2025","$35,000","1","$10,000","$25,000","Apr 18, 2025","Apr 18, 2025","Apr 2025","Paid","1/3"],
      ["Ohad Folman","Mar 23, 2025","$35,000","1","$10,000","$25,000","May 15, 2025","May 20, 2025","May 2025","Paid","1/3"],
      ["Kristen & Tyler","Oct 31, 2024","$30,000","3","$10,000","$0","May 20, 2025","May 20, 2025","May 2025","Paid","3/3"],
      ["Sabel & Jordan","Apr 18, 2025","$35,000","2","$10,000","$15,000","May 23, 2025","May 24, 2025","May 2025","Paid","2/3"],
      ["Leigh & Dan","Jul 29, 2024","$35,000","3","$15,000","$0","Jun 3, 2025","Jun 4, 2025","Jun 2025","Paid","3/3"],
      ["Atara & Heyim","Jan 31, 2025","$33,250","2","$13,250","$0","Jun 4, 2025","Jun 4, 2025","Jun 2025","Paid","1/2"],
      ["Deah & Abhi","Jun 13, 2025","$35,000","1","$5,000","$30,000","Jun 9, 2025","Jun 10, 2025","Jun 2025","Paid","1/3"],
      ["Caroline & Stephane","Jul 16, 2024","$35,000","3","$15,000","$0","Jun 24, 2025","Jun 25, 2025","Jun 2025","Paid","3/3"],
      ["Sophia & XiaoDi","Jun 22, 2024","$35,000","1","$10,000","$25,000","Jul 25, 2025","Jul 25, 2025","Jul 2025","Paid","1/4"],
      ["Ohad Folman","Mar 23, 2025","$35,000","2","$10,000","$15,000","Jul 3, 2025","Jul 8, 2025","Jul 2025","Paid","1/3"],
      ["Emma & Douglas","Jul 9, 2025","$35,000","1","$20,000","$15,000","Jul 17, 2025","Jul 17, 2025","Jul 2025","Paid","1/2"],
      ["Deah & Abhi","Jun 13, 2025","$35,000","2","$15,000","$15,000","Jul 15, 2025","Jul 21, 2025","Jul 2025","Paid","2/3"],
      ["Noa & Amit","Aug 14, 2025","$38,000","1","$5,000","$33,000","Aug 14, 2025","Aug 15, 2025","Aug 2025","Paid","1/3"],
      ["Pratik & Dhara","Aug 16, 2025","$35,000","1","$20,000","$15,000","Sep 8, 2025","Sep 8, 2025","Sep 2025","Paid","1/2"],
      ["Ohad Folman","Mar 23, 2025","$35,000","3","$15,000","$0","Aug 20, 2025","Aug 22, 2025","Aug 2025","Paid","3/3"],
      ["Sophia & XiaoDi","Jun 22, 2024","$35,000","2","$10,000","$15,000","Aug 25, 2025","Aug 26, 2025","Aug 2025","Paid","2/4"],
      ["Sabel & Jordan","Apr 18, 2025","$35,000","3","$15,000","$0","Sep 22, 2025","Sep 24, 2025","Sep 2025","Paid","3/3"],
      ["Sophia & XiaoDi","Jun 22, 2024","$35,000","3","$10,000","$5,000","Sep 22, 2025","Oct 1, 2025","Oct 2025","Paid","3/4"],
      ["Ashley & John Silvester","Aug 30, 2023","$32,000","4+5","$12,000","$0","Sep 23, 2025","Oct 6, 2025","Oct 2025","Paid","3+4/5"],
      ["Noa & Amit","Aug 14, 2025","$38,000","2","$16,500","$16,500","Oct 21, 2025","Oct 23, 2025","Oct 2025","Paid","1/3"],
      ["Sophia & XiaoDi","Jun 22, 2024","$35,000","4","$5,000","$0","Dec 3, 2025","Oct 5, 2025","Oct 2025","Paid","4/4"],
      ["Emma & Douglas","Jul 9, 2025","$35,000","2","$15,000","$0","Dec 7, 2025","Dec 9, 2025","Dec 2025","Paid","2/2"],
      ["Elana & Yitzchak","Jul 1, 2024","$35,000","3","$15,000","$0","Dec 6, 2025","Dec 10, 2025","Dec 2025","Paid","3/3"],
      ["Pratik & Dhara","Aug 16, 2025","$35,000","2","$15,000","$0","Dec 11, 2025","Dec 24, 2025","Dec 2025","Paid","2/2"],
      ["Daniel & Eitam","Jan 27, 2026","$38,000","1","$20,000","$15,000","Jan 27, 2026","Feb 3, 2026","Feb 2026","Paid","1/2"],
      ["Nadav & Gavri","Feb 21, 2026","$38,000","1","$5,000","$33,000","Jan 27, 2026","Feb 3, 2026","Feb 2026","Paid","1/3"],
      ["Deah & Abhi","Jun 13, 2025","$35,000","3","$15,000","$0","Mar 18, 2026","Mar 19, 2026","Mar 2026","Paid","3/3"],
      ["Nadav & Gavri","Feb 21, 2026","$38,000","2","$16,500","$16,500","Mar 25, 2026","Mar 31, 2026","Mar 2026","Paid","2/3"],
      ["Rex & Kenneth","Feb 10, 2026","$38,000","1","$21,500","$16,500","Mar 21, 2026","Apr 2, 2026","Apr 2026","Paid","1/2"],
    ],
  },
  "ED Cases": {
    label: "ED Cases",
    columns: ["IP","Signed Date","Total Agreement","Pmt #","Amount","Remains","Invoice Date","Payment Date","Payment Month","Status","Comment"],
    rows: [
      ["Avihu Krieger","Apr 7, 2024","$4,000","1","$3,000","$1,000","Apr 4, 2024","Apr 7, 2024","Apr 2024","Paid","1/2"],
      ["Shoshi & Joel Musongela","Apr 29, 2024","$4,000","1","$2,970","$1,000","Apr 6, 2024","May 2, 2024","May 2024","Paid","1/2"],
      ["Ofra Erlichman","Jun 2, 2024","$5,000","1","$2,000","$3,000","May 23, 2024","May 23, 2024","May 2024","Paid","1/2"],
      ["Ofra Erlichman","Jun 2, 2024","$5,000","2","$3,000","$0","Jun 11, 2024","Jun 13, 2024","Jun 2024","Paid","2/2"],
      ["Avihu Krieger","Apr 7, 2024","$4,000","2","$1,000","$0","Jul 23, 2024","Jul 23, 2024","Jul 2024","Paid","2/2"],
      ["Shoshi & Joel Musongela","Apr 29, 2024","$4,000","2","$970","$0","Aug 21, 2024","Sep 11, 2024","Sep 2024","Paid","2/2"],
      ["Elran & Itai","Dec 17, 2024","$2,000","1","$2,000","$0","Dec 19, 2024","Dec 22, 2024","Dec 2024","Paid","1/1"],
      ["Alon Livne","Feb 6, 2025","$1,500","1","$1,500","$0","Feb 10, 2025","Feb 10, 2025","Feb 2025","Paid","1/1"],
    ],
  },
  "ED Referral": {
    label: "ED Referral",
    columns: ["Company","PED","Referral Date","Invoice Date","Payment Date","Payment Month","Type","Amount","Status","Comment"],
    rows: [
      ["Exquisite Egg Donors","Chanel Wessels","March 25, 2025","","","","","","",""],
    ],
  },
  "AG Sub": {
    label: "AG Sub",
    columns: ["Company","Payment Date","Amount","Plan","Pmt #","Notes"],
    rows: [
      ["Fairfax Surrogacy","Feb 25, 2022","$750","Premium","1",""],
      ["Reproductive Assistance Inc","Feb 27, 2022","$760","Premium","1",""],
      ["US Surrogacy International","Mar 2, 2022","$570","Premium +","1",""],
      ["Genesis Group","Mar 11, 2022","$570","Premium +","1",""],
      ["Abundant Beginnings","Mar 24, 2022","$570","Premium +","1",""],
      ["All Families Surrogacy","Apr 8, 2022","$760","Premium","1",""],
      ["Angels Creation Reproductive Center","Apr 19, 2022","$760","Premium","1",""],
      ["Family Solutions International","Apr 27, 2022","$760","Premium","1",""],
      ["Pitter Patter Surrogacy","May 11, 2022","$570","Premium +","1",""],
      ["Extraordinary Conceptions","May 24, 2022","$760","Premium","1",""],
      ["Harvest Babies Surrogacy","May 25, 2022","$570","Premium +","1","First month discount"],
      ["Prime Genetics","Jun 10, 2022","$570","Premium +","1",""],
      ["All Families Surrogacy","Jul 7, 2022","$760","Premium","2","Cancelled"],
      ["Bright Futures Families","Jul 22, 2022","$760","Premium","1",""],
      ["Yvision Elite","Jul 26, 2022","$570","Premium","1","First month discount"],
      ["Family Creation","Aug 3, 2022","$760","Premium","1",""],
      ["Same Love Surrogacy","Aug 15, 2022","$760","Premium","1",""],
      ["Building Families","Aug 26, 2022","$570","Premium +","1",""],
      ["Family Creation","Sep 3, 2022","$760","Premium","2",""],
      ["Yvision Elite","Sep 9, 2022","$760","Premium","2",""],
      ["Circle Surrogacy","Oct 14, 2022","$760","Premium","1",""],
      ["Road to Baby","Oct 18, 2022","$760","Premium","1",""],
      ["NewGen Families","Oct 19, 2022","$760","Premium","1",""],
      ["Omega Family Global","Oct 27, 2022","$760","Premium","1",""],
      ["Conceptual Options","Oct 31, 2022","$570","Premium +","1",""],
      ["Building Blocks","Nov 5, 2022","$760","Premium","1",""],
      ["Surro Connections","Nov 7, 2022","$760","Premium","1",""],
      ["Future Families NW","Dec 1, 2022","$1,000","Premium","1",""],
      ["Reproductive Possibilities","Jan 3, 2023","$1,000","Premium","1",""],
      ["Growing Generations","Jan 11, 2023","$1,000","Premium","1",""],
      ["Gestacy","Feb 7, 2023","$1,000","Premium","1",""],
      ["Happy Future Surrogacy","Feb 28, 2023","$1,000","Premium","1",""],
      ["AM Surrogacy","Mar 13, 2023","$1,000","Premium","1",""],
      ["OneWorld Generations","Apr 5, 2023","$1,000","Premium","1",""],
      ["Creative Conception Inc","May 22, 2023","$1,000","Premium","1",""],
      ["Reproductive Assistance Inc","Jan 27, 2025","$760","Premium","35",""],
    ],
  },
  "Clinic Sub": {
    label: "Clinic Sub",
    columns: ["Company","Payment Date","Amount","Plan","Pmt #"],
    rows: [
      ["The Center for Fertility and Gynecology","Nov 21, 2025","$99","Basic","1"],
      ["The Center for Fertility and Gynecology","Dec 21, 2025","$99","Basic","2"],
      ["The Center for Fertility and Gynecology","Jan 21, 2026","$99","Basic","3"],
      ["The Center for Fertility and Gynecology","Feb 21, 2026","$99","Basic","4"],
      ["The Center for Fertility and Gynecology","Apr 14, 2026","$99","Basic","5"],
      ["The Center for Fertility and Gynecology","Apr 15, 2026","$99","Basic","6"],
    ],
  },
  "IPGC Sub": {
    label: "IPGC Sub",
    columns: ["User","Payment Date","Amount","Plan","Pmt #","Status","Comments","Source","Registration"],
    rows: [
      ["Karen Bendelman","Oct 24, 2022","$250","PS","1","Cancelled","","",""],
      ["Henry Chong","Feb 7, 2023","$250","PS","1","Cancelled","","",""],
      ["Susan Stieglitz","Mar 19, 2023","$250","PS","1","","","",""],
      ["Susan Stieglitz","Mar 19, 2023","$99","GC","1","","","",""],
      ["Maria Pavlovskaia","Mar 21, 2023","$99","GC","1","","","",""],
      ["Ruben Moral","Mar 22, 2023","$99","GC","1","","","",""],
      ["Ana Mirr","Mar 26, 2023","$99","GC","1","","","",""],
      ["Heather ODay","Apr 1, 2023","$99","GC","1","","","",""],
      ["Miriam Borowich","May 4, 2023","$99","GC","1","","","",""],
      ["Gianni De Cardenas","May 6, 2023","$99","GC","1","","","",""],
      ["Mona .","Jun 1, 2023","$99","GC","1","","","",""],
      ["Elana Zeligman","Jun 2, 2023","$99","GC","1","","","",""],
      ["Matan Hodorov","Jun 6, 2023","$99","GC","1","","","",""],
      ["Alexandra Macaluso","Jun 27, 2023","$99","GC","1","","","",""],
      ["Mikki Whitworth","Jun 28, 2023","$99","GC","1","","","",""],
      ["Kenneth Fountain","Jun 30, 2023","$99","GC","1","","","","Kelila - Aug 1, 2022"],
      ["Elena Melnik","Jul 12, 2023","$99","GC","1","","","",""],
      ["Ting Xue","Jul 12, 2023","$99","GC","1","","","",""],
      ["Naveen Cherukuri","Jul 16, 2023","$99","GC","1","","","",""],
      ["James Yu","Jul 23, 2023","$99","GC","1","","","",""],
      ["Ana Mirr","Jul 26, 2023","$99","GC","5","","","",""],
      ["Nathalie .","Aug 16, 2023","$99","GC","1","","","",""],
      ["Lily S","Aug 19, 2023","$99","GC","1","","","",""],
      ["Constance Akara","Sep 18, 2023","$99","GC","1","","","",""],
      ["Priyanka Muppa","Sep 22, 2023","$99","GC","1","","","",""],
      ["Michelle P","Oct 4, 2023","$99","GC","1","","","Tal",""],
      ["Vaishali Johnson","Oct 6, 2023","$99","GC","1","","","Yael",""],
      ["MaryBeth Lewis","Oct 22, 2023","$99","GC","1","","","Danielle",""],
      ["Andrea CID","Oct 29, 2023","$99","GC","1","","","",""],
      ["Carlton Dancy Janifer","Oct 29, 2023","$99","GC","1","","","",""],
      ["Joanne Chen","Nov 3, 2023","$99","GC","1","","","",""],
      ["Darren McKeown","Nov 12, 2023","$99","GC","1","","","Tal",""],
      ["Molly Kingston","Nov 16, 2023","$99","GC","1","","","",""],
      ["Tegan Jonas","Nov 25, 2023","$99","GC","1","","","",""],
      ["Ron Gonen","Jan 14, 2024","$199","GC","1","","","",""],
      ["Lily Zhao","Feb 14, 2024","$199","GC","1","","","Sivan",""],
      ["Kevin Gan","Feb 27, 2024","$199","GC","1","","","Tal",""],
      ["Kanupriya .","Mar 7, 2024","$199","GC","1","","","Sivan",""],
      ["Ohad Folman","Mar 15, 2024","$199","GC","2","","","",""],
      ["Kira Greenfield","Feb 19, 2024","$199","GC","1","","","",""],
      ["Caroline Alessi","Jun 5, 2024","$199","GC","1","","","",""],
      ["Kenneth Fountain","Jul 2, 2024","$250","GC","1","","","Kelila","Aug 1, 2022"],
      ["Moshe Hoffman","Aug 31, 2024","$199","GC","2","","","",""],
      ["Juan Luo","Sep 4, 2024","$50","GC","1","","","Organic","Mar 5, 2024"],
      ["Delia Wookey","Sep 11, 2024","$99","GC","1","","","",""],
      ["Lina Scheele","Sep 25, 2024","$39","GC","1","","","Ronny",""],
      ["Scott Tretsky","Sep 30, 2024","$39","GC","1","","","",""],
      ["Viho Adjanor","Oct 6, 2024","$39","GC","1","","","",""],
      ["Jia .","Oct 12, 2024","$39","GC","1","","","",""],
      ["Dina Katz","Oct 22, 2024","$39","GC","1","","","Tal",""],
      ["Nikola Zorijan","Nov 6, 2024","$39","GC","1","","","Organic","Nov 6, 2024"],
      ["Kennedy Aden Farthing","Nov 18, 2024","$39","GC","1","","","Organic","Nov 14, 2024"],
      ["Ye Chi","Nov 19, 2024","$39","GC","2","","","Organic","Nov 19, 2024"],
      ["Arash Ayromloo","Dec 8, 2024","$39","GC","1","","","Tal","Oct 16, 2022"],
      ["Sarah Ellis","Jan 16, 2025","$99","GC","14","","","Ronny","Dec 16, 2023"],
      ["Juan Luo","Jan 4, 2025","$99","GC","5","","","Organic","Mar 5, 2024"],
      ["Soma Priddle","Feb 27, 2025","$99","GC","1","","","Organic","Apr 29, 2023"],
      ["Kenneth Fountain","Mar 2, 2025","$250","GC","9","","","Kelila","Aug 1, 2022"],
      ["Chris Gorbecki","Mar 18, 2025","$99","GC","1","","","Organic","Mar 16, 2025"],
      ["Heather Robinson","Apr 21, 2025","$99","GC","1","","","Organic","Oct 13, 2023"],
      ["Juan Luo","Jun 4, 2025","$99","GC","10","","","Organic","Mar 5, 2024"],
      ["Sarah Ellis","Jun 16, 2025","$99","GC","18","","","Ronny","Dec 16, 2023"],
      ["Juan Luo","Jul 4, 2025","$99","GC","11","","","Organic","Mar 5, 2024"],
      ["Manmeet Chhina","Aug 14, 2025","$99","GC","1","","","Organic","Apr 12, 2024"],
      ["NIvi Baral","Aug 25, 2025","$99","GC","1","","","Yael","Aug 15, 2022"],
      ["Thalita Berpan","Sep 3, 2025","$99","GC","1","","","Organic","Mar 18, 2025"],
      ["Danielle A","Oct 28, 2025","$99","GC","1","","","chatgpt.com","Oct 12, 2025"],
      ["Beatrice Guapo","Nov 4, 2025","$99","GC","1","","","Organic","Oct 30, 2025"],
      ["Juan Luo","Jan 4, 2026","$99","GC","17","","","Organic","Mar 5, 2024"],
      ["Sarah Ellis","Jan 16, 2026","$99","GC","25","","","Ronny","Dec 16, 2023"],
      ["Celi Arias","Feb 14, 2026","$99","GC","1","","","Organic","Jan 18, 2026"],
      ["Sarah Ellis","Mar 16, 2026","$99","GC","27","","","Ronny","Dec 16, 2023"],
      ["Juan Luo","Apr 4, 2026","$99","GC","19","","","Organic","Mar 5, 2024"],
      ["Sarah Ellis","Apr 16, 2026","$99","GC","28","","","Ronny","Dec 16, 2023"],
      ["Lianna Dangelo","Apr 26, 2026","$99","GC","1","","","Organic","Apr 24, 2026"],
      ["Juan Luo","May 4, 2026","$99","GC","20","","","Organic","Mar 5, 2024"],
    ],
  },
  "IPED Sub": {
    label: "IPED Sub",
    columns: ["User","Payment Date","Amount","Plan","Pmt #","Status","Comments","Source","Registration"],
    rows: [
      ["Sarah Kessler","Mar 27, 2023","$99","ED","1","Cancelled","","",""],
      ["Mik Dan","Apr 2, 2023","$99","ED","1","","","",""],
      ["Henry Rohlich","Apr 24, 2023","$99","ED","1","","","",""],
      ["Will Hitchcock","May 14, 2023","$99","ED","1","","","",""],
      ["Leslie Lipton","May 18, 2023","$99","ED","1","","","",""],
      ["Sigalit Stell","Jun 14, 2023","$99","ED","1","","","",""],
      ["Henry Rohlich","Jun 24, 2023","$99","ED","3","","","",""],
      ["Gilad Kronman","Jun 29, 2023","$99","ED","1","","","",""],
      ["Sigalit Stell","Jul 14, 2023","$99","ED","2","","","",""],
      ["Henry Rohlich","Jul 24, 2023","$99","ED","4","","","",""],
      ["Gilad Kronman","Jul 29, 2023","$99","ED","2","","","",""],
      ["Augusto Romao","Jul 30, 2023","$99","ED","1","","","",""],
      ["Sigalit Stell","Aug 14, 2023","$99","ED","3","","","",""],
      ["Henry Rohlich","Aug 24, 2023","$99","ED","5","","","",""],
      ["Augusto Romao","Aug 29, 2023","$99","ED","2","","","",""],
      ["Sigalit Stell","Sep 14, 2023","$99","ED","4","","","",""],
      ["Mik Dan","Sep 21, 2023","$99","ED","1","","","",""],
      ["Henry Rohlich","Sep 24, 2023","$99","ED","6","","","",""],
      ["Crystal OToole","Oct 9, 2023","$99","ED","1","","","Dana",""],
      ["Sigalit Stell","Oct 14, 2023","$99","ED","5","","","",""],
      ["Henry Rohlich","Oct 24, 2023","$99","ED","7","","","",""],
      ["Sigalit Stell","Nov 14, 2023","$99","ED","6","","","",""],
      ["Mik Dan","Nov 21, 2023","$99","ED","3","","","",""],
      ["Henry Rohlich","Nov 24, 2023","$99","ED","8","","","",""],
      ["Sarah James","Dec 13, 2023","$99","ED","1","","","",""],
      ["Mik Dan","Dec 21, 2023","$99","ED","4","","","",""],
      ["Henry Rohlich","Dec 24, 2023","$99","ED","9","","","",""],
      ["Anastasia Riley","Dec 26, 2023","$99","ED","1","","","",""],
      ["Itai Rogatka","Dec 30, 2023","$99","ED","1","","","",""],
      ["Sarah James","Jan 13, 2024","$99","ED","2","","","",""],
      ["Roee Shlomi","Jan 18, 2024","$50","ED","1","","","",""],
      ["Mik Dan","Jan 21, 2024","$99","ED","5","","","",""],
      ["Henry Rohlich","Jan 24, 2024","$99","ED","10","","","",""],
      ["Anastasia Riley","Jan 25, 2024","$99","ED","2","","","",""],
      ["Itai Rogatka","Jan 30, 2024","$99","ED","2","","","",""],
      ["Noa Kuperberg","Feb 15, 2024","$99","ED","1","","","Ronny",""],
      ["Roee Shlomi","Feb 18, 2024","$99","ED","1","","","",""],
      ["Mik Dan","Feb 21, 2024","$99","ED","6","","","",""],
      ["Henry Rohlich","Feb 24, 2024","$99","ED","11","","","",""],
      ["Anastasia Riley","Feb 25, 2024","$99","ED","3","","","",""],
      ["Noa Kuperberg","Mar 15, 2024","$99","ED","2","","","Ronny",""],
      ["Roee Shlomi","Mar 18, 2024","$99","ED","2","","","",""],
      ["Mik Dan","Mar 21, 2024","$99","ED","7","","","",""],
      ["Anastasia Riley","Mar 25, 2024","$99","ED","4","","","",""],
      ["Avihu Krieger","Apr 13, 2024","$99","ED","2","","","",""],
      ["Gali Ratzon","Apr 14, 2024","$99","ED","1","","","Ronny",""],
      ["Noa Kuperberg","Apr 15, 2024","$99","ED","3","","","Ronny",""],
      ["Henry Rohlich","Apr 24, 2024","$99","ED","12","","","",""],
      ["Anastasia Riley","Apr 25, 2024","$99","ED","5","","","",""],
      ["Ofra Erlichman","Apr 26, 2024","$99","ED","1","","","",""],
      ["Sarah James","Apr 29, 2024","$99","ED","1","","","",""],
      ["Ohad Folman","Jun 2, 2024","$99","ED","1","","","",""],
      ["Andrew P Weinreich","Jun 10, 2024","$99","ED","1","","","",""],
      ["Gali Ratzon","Jun 14, 2024","$99","ED","3","","","Ronny",""],
      ["Anastasia Riley","Jun 25, 2024","$99","ED","7","","","",""],
      ["Noam Traub","Jun 26, 2024","$99","ED","1","","","Judy",""],
      ["Ohad Folman","Jul 2, 2024","$99","ED","2","","","",""],
      ["Andrew P Weinreich","Jul 10, 2024","$99","ED","2","","","",""],
      ["Ohad Folman","Aug 2, 2024","$99","ED","3","","","",""],
      ["Moran Huber","Aug 3, 2024","$99","ED","2","","","",""],
      ["Ohad Folman","Sep 2, 2024","$99","ED","4","","","",""],
      ["Moran Huber","Sep 3, 2024","$99","ED","3","","","",""],
      ["Jorge Suarez-Menendez","Sep 4, 2024","$99","ED","1","","","","Sep 3, 2024"],
      ["Pritesh Patel","Sep 8, 2024","$99","ED","1","","","","Aug 14, 2024"],
      ["Nadav Dvir","Sep 9, 2024","$99","ED","1","","","","Sep 9, 2024"],
      ["Noam Traub","Sep 26, 2024","$99","ED","3","","","Judy",""],
      ["Deann Marie Akins","Sep 30, 2024","$39","ED","1","","","",""],
      ["Ohad Folman","Oct 2, 2024","$99","ED","5","","","",""],
      ["Viho Adjanor","Oct 6, 2024","$39","ED","1","","","",""],
      ["Daphnir Cesar Joisil","Oct 6, 2024","$39","ED","1","","","Shahar","Sep 9, 2024"],
      ["Nadav Dvir","Oct 9, 2024","$99","ED","2","","","","Sep 9, 2024"],
      ["Noam Traub","Oct 26, 2024","$99","ED","4","","","Judy",""],
      ["Dan Neyman","Oct 29, 2024","$39","ED","1","","","Google","May 27, 2024"],
      ["Eliya Yosefyan","Oct 29, 2024","$39","ED","1","","","Google",""],
      ["Ohad Folman","Nov 2, 2024","$99","ED","6","","","",""],
      ["Jorge Suarez-Menendez","Nov 4, 2024","$99","ED","3","","","","Sep 3, 2024"],
      ["Viho Adjanor","Nov 6, 2024","$39","ED","2","","","","Oct 6, 2024"],
      ["Daphnir Cesar Joisil","Nov 6, 2024","$39","ED","2","","","Shahar","Sep 9, 2024"],
      ["Nadav Dvir","Nov 9, 2024","$99","ED","3","","","","Sep 9, 2024"],
      ["Gina Orsot","Nov 13, 2024","$39","ED","1","","","Ronny","Nov 13, 2024"],
      ["Dan Neyman","Nov 29, 2024","$39","ED","2","","","Google","May 27, 2024"],
      ["Ohad Folman","Dec 2, 2024","$99","ED","7","","","",""],
      ["Nadav Dvir","Dec 9, 2024","$99","ED","4","","","","Sep 9, 2024"],
      ["Viho Adjanor","Jan 6, 2025","$39","ED","4","","","","Oct 6, 2024"],
      ["Nadav Dvir","Jan 9, 2025","$99","ED","5","","","","Sep 9, 2024"],
      ["Asher And","Jan 15, 2025","$99","ED","1","","","","Jan 15, 2025"],
      ["Dan Neyman","Jan 29, 2025","$39","ED","4","","","Google","May 27, 2024"],
      ["Nadav Dvir","Feb 9, 2025","$99","ED","6","","","","Sep 9, 2024"],
      ["Asher And","Feb 15, 2025","$99","ED","2","","","","Jan 15, 2025"],
      ["Dan Neyman","Feb 28, 2025","$39","ED","5","","","Google","May 27, 2024"],
      ["Nadav Dvir","Mar 9, 2025","$99","ED","7","","","","Sep 9, 2024"],
      ["David Warshaw","Mar 11, 2025","$99","ED","1","","","Tomer",""],
      ["Asher And","Mar 15, 2025","$99","ED","3","","","","Jan 15, 2025"],
      ["Roee Shlomi","Mar 23, 2025","$99","ED","1","","","","Dec 14, 2023"],
      ["Dan Neyman","Mar 31, 2025","$39","ED","6","","","Google","May 27, 2024"],
      ["Asher And","Apr 15, 2025","$99","ED","4","","","","Jan 15, 2025"],
      ["Roee Shlomi","Apr 23, 2025","$99","ED","2","","","","Dec 14, 2023"],
      ["Dan Neyman","Apr 30, 2025","$39","ED","7","","","Google","May 27, 2024"],
      ["Asher And","May 15, 2025","$99","ED","5","","","","Jan 15, 2025"],
      ["Roee Shlomi","May 23, 2025","$99","ED","3","","","","Dec 14, 2023"],
      ["Dan Neyman","May 30, 2025","$39","ED","8","","","Google","May 27, 2024"],
      ["Asher And","Jun 15, 2025","$99","ED","6","","","","Jan 15, 2025"],
      ["Pritesh Patel","Jun 24, 2025","$99","ED","2","","2nd time","Organic","Aug 14, 2024"],
      ["Dan Neyman","Jun 30, 2025","$39","ED","9","","","Google","May 27, 2024"],
      ["Pritesh Patel","Jul 24, 2025","$99","ED","3","","2nd time","Organic","Aug 14, 2024"],
      ["Dan Neyman","Jul 31, 2025","$39","ED","10","","","Google","May 27, 2024"],
      ["Narda Mahabir","Sep 5, 2025","$99","ED","1","","","Organic","Aug 9, 2025"],
      ["Leena .","Sep 18, 2025","$99","ED","1","","","Organic","Jul 25, 2025"],
      ["Narda Mahabir","Oct 5, 2025","$99","ED","2","","","Organic","Aug 9, 2025"],
      ["Narda Mahabir","Nov 5, 2025","$99","ED","3","","","Organic","Aug 9, 2025"],
      ["Yarden Haskin","Nov 18, 2025","$99","ED","1","","","Google","Oct 18, 2025"],
      ["Alon Maor","Nov 18, 2025","$99","ED","1","","","Google","Oct 18, 2025"],
      ["Allen Yu","Nov 20, 2025","$99","ED","1","","","Organic","Oct 6, 2025"],
      ["Narda Mahabir","Dec 5, 2025","$99","ED","4","","","Organic","Aug 9, 2025"],
      ["Yarden Haskin","Dec 18, 2025","$99","ED","2","","","Google","Oct 18, 2025"],
      ["Allen Yu","Dec 20, 2025","$99","ED","2","","","Organic","Oct 6, 2025"],
      ["Tal Pal","Jan 4, 2026","$99","ED","1","","","Organic","Jan 2, 2022"],
      ["Narda Mahabir","Jan 5, 2026","$99","ED","5","","","Organic","Aug 9, 2025"],
      ["Yarden Haskin","Jan 18, 2026","$99","ED","3","","","Google","Oct 18, 2025"],
      ["Narda Mahabir","Feb 5, 2026","$99","ED","6","","","Organic","Aug 9, 2025"],
      ["Frank Dominick Balestri","Feb 8, 2026","$99","ED","1","","","Organic","Nov 11, 2024"],
      ["Narda Mahabir","Mar 6, 2026","$99","ED","7","","","Organic","Aug 9, 2025"],
      ["Frank Dominick Balestri","Mar 8, 2026","$99","ED","2","","","Organic","Nov 11, 2024"],
      ["Frank Dominick Balestri","Apr 8, 2026","$99","ED","3","","","Organic","Nov 11, 2024"],
      ["Frank Dominick Balestri","May 8, 2026","$99","ED","4","","","Organic","Nov 11, 2024"],
    ],
  },
  "SD Recruitment": {
    label: "SD Recruitment",
    columns: ["Company","Payment Date","Amount","Notes"],
    rows: [
      ["CryoMate","Sep 20, 2022","$9,700",""],
      ["CryoMate","Jul 1, 2023","$5,200",""],
      ["CryoMate","Aug 9, 2023","$6,669",""],
      ["CryoMate","Sep 8, 2023","$4,914",""],
      ["CryoMate","Oct 2, 2023","$2,223","Related to September"],
      ["CryoMate","Oct 12, 2023","$6,903",""],
      ["CryoMate","Nov 1, 2023","$6,084",""],
      ["CryoMate","Dec 7, 2023","$6,077",""],
      ["CryoMate","Jan 2, 2024","$6,084",""],
      ["CryoMate","Feb 1, 2024","$6,084",""],
      ["CryoMate","Mar 1, 2024","$5,744",""],
      ["CryoMate","Apr 4, 2024","$6,084",""],
      ["CryoMate","May 1, 2024","$6,084",""],
      ["CryoMate","May 31, 2024","$2,340",""],
      ["CryoMate","Jun 4, 2024","$6,084",""],
      ["CryoMate","Jul 5, 2024","$6,084",""],
      ["CryoMate","Aug 6, 2024","$6,084",""],
    ],
  },
  "Match Challenge": {
    label: "Match Challenge",
    columns: ["IP","Payment Date","Amount","Plan","Source","Registration","Comments"],
    rows: [
      ["Tonya Burwell","Jun 18, 2025","$39","GC","Atara","Jul 7, 2023",""],
      ["Jaime Malek","Jun 19, 2025","$39","GC","Organic","Jun 5, 2025",""],
      ["Manmeet Chhina","Jun 21, 2025","$39","GC","Organic","Apr 12, 2024",""],
      ["Angela Chang","Jun 23, 2025","$39","GC","Yael","Nov 1, 2022",""],
      ["Lauren Bromfield","Jun 30, 2025","$39","GC","Organic","Jun 13, 2025",""],
      ["Grace Bellack","Jun 30, 2025","$39","GC","Organic","Nov 21, 2023",""],
      ["Noah Sanders","Jul 11, 2025","$39","ED","Organic","Feb 7, 2025",""],
      ["Lei Shi","Sep 28, 2025","$39","GC","Organic","Jul 9, 2025",""],
      ["Dana Bhasin","Sep 29, 2025","$39","GC","Organic","Feb 20, 2025",""],
      ["Karen .","Oct 1, 2025","$39","GC","Organic","Apr 7, 2025",""],
    ],
  },
  "Dedicated Search": {
    label: "Dedicated Search",
    columns: ["IP","Signed Date","Total Agreement","Pmt #","Amount","Remains","Invoice Date","Payment Date","Payment Month","Status","Comment"],
    rows: [
      ["Anjali Shah","Apr 19, 2024","$2,500","1","$2,500","$0","Apr 8, 2024","Apr 30, 2024","Apr 2024","Paid",""],
      ["Natan Shvartcman","Jan 5, 2026","$100","1","$100","$0","Jan 7, 2026","Jan 7, 2026","","Paid",""],
    ],
  },
  "Mental Health": {
    label: "Mental Health",
    columns: ["Company","IP","Report Date","Invoice Date","Type","Amount","Status","Comment"],
    rows: [
      ["Bryman Counseling Associates","Ran & Itai","Oct 14, 2022","Oct 17, 2022","Success","$200","Paid",""],
    ],
  },
};

/* ─── STATUS BADGES ─────────────────────────────────── */
const BADGES = {
  Paid:           { bg: "#EBF7F8", color: "#1D4664", border: "#73C0CA" },
  Cancelled:      { bg: "#FEF2F2", color: "#9B1C1C", border: "#FCA5A5" },
  Canceled:       { bg: "#FEF2F2", color: "#9B1C1C", border: "#FCA5A5" },
  Refunded:       { bg: "#FFF8E1", color: "#7C5200", border: "#FEC006" },
  "Invoice Sent": { bg: "#F0EBF9", color: "#5B21B6", border: "#9474CC" },
  Success:        { bg: "#EBF7F8", color: "#1D4664", border: "#73C0CA" },
  Meeting:        { bg: "#F0EBF9", color: "#6D28D9", border: "#9474CC" },
  Waived:         { bg: "#FFF8E1", color: "#7C5200", border: "#FEC006" },
};

function Badge({ v }) {
  const s = BADGES[v];
  if (!s) return <span style={{ color: C.gray, fontSize: 12 }}>{v}</span>;
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: 20,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      fontFamily: "'Montserrat', sans-serif",
    }}>{v}</span>
  );
}

/* ─── EDITABLE CELL ─────────────────────────────────── */
function Cell({ value, onChange, isHead, isStatus }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef();

  const open = () => { setDraft(value); setEditing(true); setTimeout(() => ref.current?.focus(), 0); };
  const save = () => { setEditing(false); if (draft !== value) onChange(draft); };
  const cancel = () => { setEditing(false); setDraft(value); };

  const base = {
    width: "100%", border: "none", borderRadius: 4,
    fontFamily: "'Montserrat', sans-serif",
    outline: `2px solid ${C.teal}`,
    background: "#F0F9FA",
    padding: isHead ? "5px 12px" : "5px 10px",
    fontSize: isHead ? 10 : 13,
    fontWeight: isHead ? 700 : 400,
    color: isHead ? C.white : C.navy,
    letterSpacing: isHead ? "0.08em" : 0,
    textTransform: isHead ? "uppercase" : "none",
    boxSizing: "border-box",
  };

  if (editing) return (
    <input ref={ref} value={draft} style={base}
      onChange={e => setDraft(e.target.value)}
      onBlur={save}
      onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") cancel(); }}
    />
  );

  if (isHead) return (
    <span onClick={open} title="Click to edit" style={{
      cursor: "pointer", display: "block", padding: "6px 12px",
      fontSize: 10, fontWeight: 700, color: C.teal,
      letterSpacing: "0.08em", textTransform: "uppercase",
      whiteSpace: "nowrap",
    }}>{value || <span style={{ opacity: 0.4 }}>Edit</span>}</span>
  );

  return (
    <span onClick={open} title="Click to edit" style={{
      cursor: "pointer", display: "block", padding: "7px 10px",
      borderRadius: 4, transition: "background 0.12s",
      fontSize: 13, color: value ? C.navy : "#aaa",
    }}
      onMouseEnter={e => e.currentTarget.style.background = C.tealLight}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      {isStatus && BADGES[value] ? <Badge v={value} /> : (value || "—")}
    </span>
  );
}

/* ─── STRIPE BAR (matches deck) ─────────────────────── */
function StripeBar() {
  return (
    <div style={{ display: "flex", height: 4, width: "100%" }}>
      {[C.navy, C.purple, C.teal, C.yellow].map((col, i) => (
        <div key={i} style={{ flex: 1, background: col }} />
      ))}
    </div>
  );
}

/* ─── MAIN ──────────────────────────────────────────── */
export default function App() {
  const [activeKey, setActiveKey] = useState("Summary");
  const [data, setData] = useState(() => {
    const d = {};
    for (const k in SHEETS_DEF) {
      d[k] = {
        label: SHEETS_DEF[k].label,
        columns: [...SHEETS_DEF[k].columns],
        rows: SHEETS_DEF[k].rows.map(r => [...r]),
      };
    }
    return d;
  });
  const [search, setSearch] = useState("");

  const sheet = data[activeKey];
  const statusIdx = sheet.columns.findIndex(c =>
    ["status", "payment status"].includes(c.toLowerCase())
  );

  const filtered = search
    ? sheet.rows.filter(r => r.some(c => c.toLowerCase().includes(search.toLowerCase())))
    : sheet.rows;

  const realIdx = (fi) => {
    if (!search) return fi;
    let n = 0;
    for (let i = 0; i < sheet.rows.length; i++) {
      if (sheet.rows[i].some(c => c.toLowerCase().includes(search.toLowerCase()))) {
        if (n === fi) return i;
        n++;
      }
    }
    return fi;
  };

  const updateCell = (fi, ci, val) => {
    const ri = realIdx(fi);
    setData(p => {
      const rows = p[activeKey].rows.map((r, i) => i === ri ? r.map((c, j) => j === ci ? val : c) : r);
      return { ...p, [activeKey]: { ...p[activeKey], rows } };
    });
  };

  const updateCol = (ci, val) => setData(p => ({
    ...p, [activeKey]: { ...p[activeKey], columns: p[activeKey].columns.map((c, i) => i === ci ? val : c) }
  }));

  const addRow = () => setData(p => ({
    ...p, [activeKey]: { ...p[activeKey], rows: [...p[activeKey].rows, p[activeKey].columns.map(() => "")] }
  }));

  const delRow = (fi) => {
    const ri = realIdx(fi);
    setData(p => ({
      ...p, [activeKey]: { ...p[activeKey], rows: p[activeKey].rows.filter((_, i) => i !== ri) }
    }));
  };

  const sheetKeys = Object.keys(data);

  return (
    <div style={{ minHeight: "100vh", background: C.off, fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { height: 5px; width: 5px; }
        ::-webkit-scrollbar-track { background: ${C.border}; }
        ::-webkit-scrollbar-thumb { background: ${C.teal}88; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.teal}; }
      `}</style>

      {/* ── TOP STRIPE ── */}
      <StripeBar />

      {/* ── HEADER ── */}
      <header style={{
        background: C.white,
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 62,
        position: "sticky", top: 4, zIndex: 200,
        boxShadow: "0 2px 12px rgba(29,70,100,0.10)",
        borderBottom: `1px solid ${C.border}`,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.teal}, ${C.purple})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 16px ${C.teal}55`,
            fontWeight: 800, fontSize: 16, color: C.white,
            fontFamily: "'Montserrat', sans-serif",
          }}>E</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: C.navy, letterSpacing: "0.02em", lineHeight: 1 }}>
              Expecting<span style={{ color: C.teal }}>.Ai</span>
            </div>
            <div style={{ fontSize: 9, color: C.gray, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2, fontWeight: 600 }}>
              Revenue Ledger
            </div>
          </div>
        </div>

        {/* Right side: stat + search */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div style={{
            background: C.tealLight,
            border: `1px solid ${C.teal}55`,
            borderRadius: 8, padding: "6px 18px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 9, color: C.navy, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>Total Revenue</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.navy, letterSpacing: "0.02em" }}>$1,631,780</div>
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: C.teal, fontSize: 14 }}>⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search records…"
              style={{
                background: C.off,
                border: `1px solid ${C.border}`,
                borderRadius: 8, padding: "8px 14px 8px 34px",
                color: C.navy, fontSize: 12, outline: "none", width: 200,
                fontFamily: "'Montserrat', sans-serif", fontWeight: 500,
              }}
            />
          </div>
          <div style={{ color: C.gray, fontSize: 11, fontWeight: 500 }}>
            {filtered.length} records
          </div>
        </div>
      </header>

      {/* ── TAB BAR ── */}
      <div style={{
        background: C.white,
        borderBottom: `1px solid ${C.border}`,
        padding: "0 40px",
        display: "flex", overflowX: "auto",
        position: "sticky", top: 66, zIndex: 100,
        gap: 0,
      }}>
        {sheetKeys.map(k => {
          const active = k === activeKey;
          return (
            <button key={k}
              onClick={() => { setActiveKey(k); setSearch(""); }}
              style={{
                background: active ? C.tealLight : "transparent",
                border: "none",
                borderBottom: active ? `2px solid ${C.teal}` : "2px solid transparent",
                borderTop: active ? `2px solid transparent` : "2px solid transparent",
                color: active ? C.navy : C.gray,
                padding: "12px 14px",
                cursor: "pointer",
                fontSize: 11, fontWeight: active ? 700 : 500,
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                transition: "all 0.18s",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.color = C.navy; e.currentTarget.style.background = C.off; } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.color = C.gray; e.currentTarget.style.background = "transparent"; } }}
            >{data[k].label}</button>
          );
        })}
      </div>

      {/* ── CONTENT ── */}
      <main style={{ padding: "28px 40px 60px" }}>

        {/* Sheet header bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase", marginBottom: 4 }}>
              Revenue Ledger
            </div>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: C.navy, letterSpacing: "0.01em" }}>
              {sheet.label}
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 11, color: C.gray, fontWeight: 500 }}>
              {filtered.length} of {sheet.rows.length} records · Click any cell or header to edit
            </p>
          </div>
          <button onClick={addRow} style={{
            background: `linear-gradient(135deg, ${C.teal}, ${C.purple})`,
            color: C.white, border: "none", borderRadius: 8,
            padding: "10px 22px", cursor: "pointer",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.05em",
            boxShadow: `0 4px 16px ${C.purple}55`,
            transition: "all 0.2s",
            fontFamily: "'Montserrat', sans-serif",
            display: "flex", alignItems: "center", gap: 7,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 6px 20px ${C.purple}77`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 16px ${C.purple}55`; }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> ADD ROW
          </button>
        </div>

        {/* Table */}
        <div style={{
          background: C.white,
          borderRadius: 10,
          border: `1px solid ${C.border}`,
          boxShadow: "0 4px 20px rgba(29,70,100,0.08)",
          overflow: "hidden",
        }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "auto" }}>
              <thead>
                <tr style={{ background: C.navy, borderBottom: `3px solid ${C.teal}` }}>
                  {sheet.columns.map((col, ci) => (
                    <th key={ci} style={{
                      padding: 0, textAlign: "left",
                      borderRight: `1px solid rgba(115,192,202,0.15)`,
                      whiteSpace: "nowrap", minWidth: 90,
                    }}>
                      <Cell value={col} onChange={v => updateCol(ci, v)} isHead />
                    </th>
                  ))}
                  <th style={{ width: 44, background: C.navy, borderRight: "none" }} />
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, fi) => {
                  const even = fi % 2 === 0;
                  return (
                    <tr key={fi} style={{
                      background: even ? C.white : C.off,
                      borderBottom: `1px solid ${C.border}`,
                      transition: "background 0.1s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = C.tealLight}
                      onMouseLeave={e => e.currentTarget.style.background = even ? C.white : C.off}
                    >
                      {row.map((cell, ci) => (
                        <td key={ci} style={{
                          padding: 0, verticalAlign: "middle",
                          borderRight: `1px solid ${C.border}`,
                        }}>
                          <Cell
                            value={cell}
                            onChange={v => updateCell(fi, ci, v)}
                            isStatus={ci === statusIdx}
                          />
                        </td>
                      ))}
                      <td style={{ textAlign: "center", verticalAlign: "middle", padding: "0 4px" }}>
                        <button onClick={() => delRow(fi)} style={{
                          background: "none", border: "none", cursor: "pointer",
                          color: C.border, fontSize: 13, borderRadius: 4,
                          padding: "4px 7px", transition: "all 0.15s", lineHeight: 1,
                        }}
                          onMouseEnter={e => { e.currentTarget.style.color = "#E53E3E"; e.currentTarget.style.background = "#FFF5F5"; }}
                          onMouseLeave={e => { e.currentTarget.style.color = C.border; e.currentTarget.style.background = "none"; }}
                          title="Delete row"
                        >✕</button>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={sheet.columns.length + 1} style={{
                      padding: "56px 24px", textAlign: "center",
                      color: C.gray, fontSize: 14, fontWeight: 500,
                    }}>
                      {search ? `No records matching "${search}"` : "No records. Click + ADD ROW to begin."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: C.gray, fontSize: 11, fontWeight: 500 }}>
            {filtered.length} records{search ? ` · filtered by "${search}"` : ""}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <StripeBar />
            <span style={{ color: C.gray, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em" }}>
              EXPECTING.AI
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
