dataSetVersion = "2021-04-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Playable", key: "playable" },
      { name: "Non-Playable", key: "nonplayable" },
      { name: "Antagonist", key: "antagonist" },
    ]
  },
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to series.",
    checked: true,
    sub: [
      { name: "Xenoblade Chronicles", key: "XC" },
      { name: "Future Connected", key: "FC" },
      { name: "Xenoblade Chronicles X", key: "XCX" },
      { name: "Xenoblade Chronicles 2", key: "XC2" },
      { name: "The Golden Country", key: "TGC" },
      { name: "Xenogears", key: "XG" },
      { name: "Xenosaga", key: "XS" },
    ]
  },
  {
    name: "Filter Spoilers",
    key: "spoiler",
    tooltip: "Check this to restrict spoilers."
  },
  {
    name: "Filter Duplicates",
    key: "duplicate",
    tooltip: "Check this to restrict duplicates."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "George Washington",
    img: "GeorgeWashington.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "John Adams",
    img: "JohnAdams.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Thomas Jefferson",
    img: "ThomasJefferson.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "James Madison",
    img: "JamesMadison.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "James Monroe",
    img: "JamesMonroe.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "John Quincy Adams",
    img: "JohnQuincyAdams.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Andrew Jackson",
    img: "AndrewJackson.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Martin Van Buren",
    img: "MartinVanBuren.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "William Henry Harrison",
    img: "WilliamHenryHarrison.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "John Tyler",
    img: "JohnTyler.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "James K. Polk",
    img: "JamesKPolk.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Zachary Taylor",
    img: "ZacharyTaylor.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Millard Fillmore",
    img: "MillardFillmore.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Franklin Pierce",
    img: "FranklinPierce.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "James Buchanan",
    img: "JamesBuchanan.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Abraham Lincoln",
    img: "AbrahamLincoln.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Andrew Johnson",
    img: "AndrewJohnson.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Ulysses S. Grant",
    img: "UlyssesSGrant.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Rutherford B. Hayes",
    img: "RutherfordBHayes.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "James A. Garfield",
    img: "JamesAGarfield.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Chester A. Arthur",
    img: "ChesterAArthur.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Grover Cleveland",
    img: "GroverCleveland.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Benjamin Harrison",
    img: "BenjaminHarrison.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "William McKinley",
    img: "WilliamMcKinley.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Theodore Roosevelt",
    img: "TheodoreRoosevelt.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "William Howard Taft",
    img: "WilliamHowardTaft.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Warren G. Harding",
    img: "WarrenGHarding.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Calvin Coolidge",
    img: "CalvinCoolidge.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Herbert Hoover",
    img: "HerbertHoover.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Franklin D. Roosevelt",
    img: "FranklinDRoosevelt.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Harry S. Truman",
    img: "HarrySTruman.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Dwight D. Eisenhower",
    img: "DwightDEisenhower.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "John F. Kennedy",
    img: "JohnFKennedy.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Lyndon B. Johnson",
    img: "LyndonBJohnson.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Richard Nixon",
    img: "RichardNixon.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Gerald Ford",
    img: "GeraldFord.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Jimmy Carter",
    img: "JimmyCarter.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Ronald Reagan",
    img: "RonaldReagan.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "George H.W. Bush",
    img: "GeorgeHWBush.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Bill Clinton",
    img: "BillClinton.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "George W. Bush",
    img: "GeorgeWBush.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Barack Obama",
    img: "BarackOba,a.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Donald Trump",
    img: "DonaldTrump.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Joe Biden",
    img: "JoeBiden.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
];
