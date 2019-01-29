// const linData = {
//   newsfeed: [
//     {
//       title: "Lin Manuel Miranda Working on Moana Sequel",
//       url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
//       date: "1/23/19"
//     },
//     {
//       title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
//       url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
//       date: "1/25/19",
//     },
//     {
//       title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
//       url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
//       date: "1/25/19",
//     },
//     {
//       title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
//       url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
//       date: "1/25/19"
//     },
//     {
//       title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
//       url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
//       date: "1/16/19"

//     },
//     {
//       title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
//       url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
//       date: "1/8/19"
//     }
//   ],

//   personalLife: {
//     birthDate: "January 16, 1980",
//     birthLocation: "New York City",
//     cityOfResidence: "New York City",
//     nationality: "Puerto Rican, American",
//     family: {
//       spouse: "Vanessa Nada",
//       kids: ["Sebastian Miranda",
//         "Francisco Miranda"
//       ],
//       parents: ["Luis A. Miranda, Jr.",
//         "Luz Towns-Miranda"],
//       pets: ["Tobillo", "Toby"]
//     }
//   },

//   career: {
//     shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent               musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
//     MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
//     notableRoles: ["Usnavi", "Alexander Hamilton"],
//     notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
//     awards: ["Multiple, Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
//   },

//   executiveSummary: {
//     knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee Elise Goldsberry", "Phillipa Soo"],
//     image: {
//       photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
//       caption: "Lin Manuel Miranda Headshot"
//     },
//     listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
//     countryOfResidence: "United States"
//   },
  
//   extrasReport: {
//       onlineResources: [
//           {
//               name: "Wikipedia",
//               url: "https://en.wikipedia.org/wiki/Lin-Manuel_Miranda"
//           },
//           {
//               name: "Official Website",
//               url: "http://www.linmanuel.com/"
//           },
//           {
//               name: "Fan Website",
//               url: "https://linmiranda.com/"
//           }
//       ],
//       placesToViewWork: [
//           {
//               name: "Youtube",
//               url: ""
//           },
//           {
//               name: "Broadway",
//               url: ""
//           }
//       ],
//       pastShowDates: ["January 15, 2019", "December 12, 2018", "October 7, 2018", "September 4, 2018", "August 1, 2018", "July 19, 2018", "July 2, 2018", "June 18, 2018", ]

//   }
// }

// // Josh's Function
// const j_ul_function = (title, header, style) => {

//   let j_listString = "";
//   for (let i = 0; i < title.length; i++){
//   j_listString = j_listString + `<li>${title[i]}</li>`
// }

//  return `<div><h2>${header}</h2><ul>${j_listString}</ul></div>` 
// }

// // Charles' Function
// const ul_function = (title, header, style) => {
//   // return `<ul class ="${style}">${title}</ul>`
// let listString = "";
// for (let i = 0; i < title.length; i++){
//   listString = listString + `<li>${title[i]}</li>`
//   console.log(listString)
// }
// return `<div><h3>${header}</h3><ul>${listString}</ul></div>` 
// }

// // Connor's Function
// let newsy = ""
// for (let i = 0; i < linData.newsfeed.length; i++){
//     newsy = newsy + `<a href="${linData.newsfeed[i].url}"><li>${linData.newsfeed[i].title}   |   ${linData.newsfeed[i].date}</li>`
// }
// console.log(newsy)
// document.querySelector("#news-feed").innerHTML= newsy

// // Josh's Function Calls
// const img_function = (caption, src, alt, style) => {
//   return `<h1>${caption}</h1><img src="${src}"class=${style} alt="${alt}">`
// }

// const h1_function = (h1, style) => {
//   return `<h1>Country of residence: ${h1}</h1>`
// }
// const country = h1_function(linData.executiveSummary.countryOfResidence)
// const image = img_function(linData.executiveSummary.image.caption, linData.executiveSummary.image.photURL, "image", "")
// const knownCollabs = j_ul_function(linData.executiveSummary.knownCollaborations, "Known Collaborations")
// const aliasesString = j_ul_function(linData.executiveSummary.listOfAliases, "List of Aliases");

// document.querySelector("#executive-summary").innerHTML = `${country}${knownCollabs}${aliasesString}${image}`

// // Russell's Function Calls
// const personalKids = ul_function(linData.personalLife.family.kids, "Kids");
// const personalPets = ul_function(linData.personalLife.family.pets, "Pets");
// const personalParents = ul_function(linData.personalLife.family.parents, "Parents");

// let shortIntroHTML = `Lin Manuel Miranda was born on ${linData.personalLife.birthDate} in ${linData.personalLife.birthLocation}, NY.  He is also a ${linData.personalLife.nationality}.  He is married to ${linData.personalLife.family.spouse}.`

// document.querySelector("#personal-life").innerHTML = `<div><H2>${shortIntroHTML}</h2>${personalKids}${personalPets}${personalParents}`

// // Charles' Function Calls
// const musicalsString = ul_function(linData.career.MusicalsWritten, "Music Written");
// const rolesString = ul_function(linData.career.notableRoles, "Notable Roles");
// const songsString = ul_function(linData.career.notableSongs, "Notable Songs");
// const awardsString = ul_function(linData.career.awards, "Awards Conferred")

// console.log(musicalsString, rolesString, songsString, awardsString)
// document.querySelector("#career").innerHTML = `<div><H2>${linData.career.shortIntro}</h2>${musicalsString}${rolesString}${songsString}${awardsString}`


// //Alex's functions below this line  ¯\_(ツ)_/¯


// const h1 = (title) => {
//   return `<h1>${title}</h1>`
//  }
 
//  const a = (link) => {
//   return `<a href="${link}">link</a>`
//  }
 
//  const p =(work) => {
//   return `<p>${work}</p>`
//  }
 
//  const h3 = (past) => {
//   return `<h3> past show dates</h3>`
//  }
//  const h1String =
//   h1(`${linData.extrasReport.onlineResources[0].name}`)
//     console.log(h1String)
 
//  const aString =
//   a(`${linData.extrasReport.onlineResources[0].url}`)
//     console.log(aString)
 
 
//  const h1String2 =
//   h1(`${linData.extrasReport.onlineResources[1].name}`)
//     console.log(h1String2)
 
//  const aString2 =
//   a(`${linData.extrasReport.onlineResources[1].url}`)
//     console.log(aString2)
 
//  const h1String3 =
//   h1(`${linData.extrasReport.onlineResources[2].name}`)
//     console.log(h1String3)
 
//  const aString3 =
//   a(`${linData.extrasReport.onlineResources[2].url}`)
//   console.log(aString3)
 
//  const pString =
//   p(`${linData.extrasReport.placesToViewWork[0].name}`)
//     console.log(pString)
 
 
//  const aString4 =
//   a(`${linData.extrasReport.placesToViewWork[0].url}`)
//    console.log(aString4)
 
 
//  const pString2 =
//   p(`${linData.extrasReport.placesToViewWork[1].name}`)
//       console.log(pString2)
 
//  const aString5 =
//   a(`${linData.extrasReport.placesToViewWork[1].url}`)
//     console.log(aString5)
 
 
//  const h3String =
//   h3()
//     console.log(h3String)
 
//     const jl_ul_function2 = (title, style) => {
//       return `<ul class ="${style}">${title}</ul>`
//     }
 
//     let htmlStringExtras = "";
//     for (let i = 0; i < linData.extrasReport.pastShowDates.length; i++){
//       ul_function_test = `${jl_ul_function2(linData.extrasReport.pastShowDates[i], "")}`
//       htmlStringExtras += ul_function_test
//     }
 
 
//  const BFstring = `${h1String} ${aString} ${h1String2} ${aString2} ${h1String3} ${aString3} ${pString} ${aString4} ${pString2} ${aString5} ${h3String} ${htmlStringExtras}`
 
//  document.querySelector("#extras-report").innerHTML = BFstring
 
 
//  //Alex's functions above this line ¯\_(ツ)_/¯

const linData = {
  newsfeed: [
    {
      title: "Lin Manuel Miranda Working on Moana Sequel",
      url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
      date: "1/23/19"
    },
    {
      title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
      url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
      date: "1/25/19",
    },
    {
      title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
      url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
      date: "1/25/19",
    },
    {
      title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
      url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
      date: "1/25/19"
    },
    {
      title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
      url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
      date: "1/16/19"

    },
    {
      title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
      url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
      date: "1/8/19"
    }
  ],

  personalLife: {
    birthDate: "January 16, 1980",
    birthLocation: "New York City",
    cityOfResidence: "New York City",
    nationality: "Puerto Rican, American",
    family: {
      spouse: "Vanessa Nada",
      kids: ["Sebastian Miranda",
        "Francisco Miranda"
      ],
      parents: ["Luis A. Miranda, Jr.",
        "Luz Towns-Miranda"],
      pets: ["Tobillo", "Toby"]
    }
  },

  career: {
    shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent               musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
    MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
    notableRoles: ["Usnavi", "Alexander Hamilton"],
    notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
    awards: ["Multiple, Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
  },

  executiveSummary: {
    knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee Elise Goldsberry", "Phillipa Soo"],
    image: {
      photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
      caption: "Lin Manuel Miranda Headshot"
    },
    listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
    countryOfResidence: "United States"
  },
  
  extrasReport: {
      onlineResources: [
          {
              name: "Wikipedia",
              url: "https://en.wikipedia.org/wiki/Lin-Manuel_Miranda"
          },
          {
              name: "Official Website",
              url: "http://www.linmanuel.com/"
          },
          {
              name: "Fan Website",
              url: "https://linmiranda.com/"
          }
      ],
      placesToViewWork: [
          {
              name: "Youtube",
              url: ""
          },
          {
              name: "Broadway",
              url: ""
          }
      ],
      pastShowDates: ["January 15, 2019", "December 12, 2018", "October 7, 2018", "September 4, 2018", "August 1, 2018", "July 19, 2018", "July 2, 2018", "June 18, 2018", ]

  }
}

// Josh's Function
const j_ul_function = (title, header, style) => {

  let j_listString = "";
  for (let i = 0; i < title.length; i++){
  j_listString = j_listString + `<li>${title[i]}</li>`
}

 return `<div><h2>${header}</h2><ul>${j_listString}</ul></div>` 
}


// Charles' Function
const ul_function = (title, header, style) => {

  // return `<ul class ="${style}">${title}</ul>`
let listString = "";
for (let i = 0; i < title.length; i++){
  listString = listString + `<li>${title[i]}</li>`
  console.log(listString)
}
return `<div><h3>${header}</h3><ul>${listString}</ul></div>` 
}

// Connor's Function
let newsy = ""
for (let i = 0; i < linData.newsfeed.length; i++){
    newsy = newsy + `<a href="${linData.newsfeed[i].url}"><li>${linData.newsfeed[i].title}   |   ${linData.newsfeed[i].date}</li>`
}
console.log(newsy)
document.querySelector("#news-feed").innerHTML= newsy

// Josh's Function Calls
const img_function = (caption, src, alt, style) => {
  return `<h1>${caption}</h1><img src="${src}"class=${style} alt="${alt}">`
}

const h1_function = (h1, style) => {
  return `<h1>Country of residence: ${h1}</h1>`
}
const country = h1_function(linData.executiveSummary.countryOfResidence)
const image = img_function(linData.executiveSummary.image.caption, linData.executiveSummary.image.photURL, "image", "")
const knownCollabs = j_ul_function(linData.executiveSummary.knownCollaborations, "Known Collaborations")
const aliasesString = j_ul_function(linData.executiveSummary.listOfAliases, "List of Aliases");

document.querySelector("#executive-summary").innerHTML = `${country}${knownCollabs}${aliasesString}${image}`


// Russell's Function Calls
const personalKids = ul_function(linData.personalLife.family.kids, "Kids");
const personalPets = ul_function(linData.personalLife.family.pets, "Pets");
const personalParents = ul_function(linData.personalLife.family.parents, "Parents");

let shortIntroHTML = `Lin Manuel Miranda was born on ${linData.personalLife.birthDate} in ${linData.personalLife.birthLocation}, NY.  He is also a ${linData.personalLife.nationality}.  He is married to ${linData.personalLife.family.spouse}.`

document.querySelector("#personal-life").innerHTML = `<div><H2>${shortIntroHTML}</h2>${personalKids}${personalPets}${personalParents}`

// Charles' Function Calls
const musicalsString = ul_function(linData.career.MusicalsWritten, "Music Written");
const rolesString = ul_function(linData.career.notableRoles, "Notable Roles");
const songsString = ul_function(linData.career.notableSongs, "Notable Songs");
const awardsString = ul_function(linData.career.awards, "Awards Conferred")

console.log(musicalsString, rolesString, songsString, awardsString)
document.querySelector("#career").innerHTML = `<div><H2>${linData.career.shortIntro}</h2>${musicalsString}${rolesString}${songsString}${awardsString}`

//Alex's functions below this line  ¯\_(ツ)_/¯


const h1 = (title) => {
  return `<h1>${title}</h1>`
 }
 
 const a = (link) => {
  return `<a href="${link}">link</a>`
 }
 
 const p =(work) => {
  return `<p>${work}</p>`
 }
 
 const h3 = (past) => {
  return `<h3> past show dates</h3>`
 }
 const h1String =
  h1(`${linData.extrasReport.onlineResources[0].name}`)
    console.log(h1String)
 
 const aString =
  a(`${linData.extrasReport.onlineResources[0].url}`)
    console.log(aString)
 
 
 const h1String2 =
  h1(`${linData.extrasReport.onlineResources[1].name}`)
    console.log(h1String2)
 
 const aString2 =
  a(`${linData.extrasReport.onlineResources[1].url}`)
    console.log(aString2)
 
 const h1String3 =
  h1(`${linData.extrasReport.onlineResources[2].name}`)
    console.log(h1String3)
 
 const aString3 =
  a(`${linData.extrasReport.onlineResources[2].url}`)
  console.log(aString3)
 
 const pString =
  p(`${linData.extrasReport.placesToViewWork[0].name}`)
    console.log(pString)
 
 
 const aString4 =
  a(`${linData.extrasReport.placesToViewWork[0].url}`)
   console.log(aString4)
 
 
 const pString2 =
  p(`${linData.extrasReport.placesToViewWork[1].name}`)
      console.log(pString2)
 
 const aString5 =
  a(`${linData.extrasReport.placesToViewWork[1].url}`)
    console.log(aString5)
 
 
 const h3String =
  h3()
    console.log(h3String)
 
    const jl_ul_function2 = (title, style) => {
      return `<ul class ="${style}">${title}</ul>`
    }
 
    let htmlStringExtras = "";
    for (let i = 0; i < linData.extrasReport.pastShowDates.length; i++){
      ul_function_test = `${jl_ul_function2(linData.extrasReport.pastShowDates[i], "")}`
      htmlStringExtras += ul_function_test
    }
 
 
 const BFstring = `${h1String} ${aString} ${h1String2} ${aString2} ${h1String3} ${aString3} ${pString} ${aString4} ${pString2} ${aString5} ${h3String} ${htmlStringExtras}`
 
 document.querySelector("#extras-report").innerHTML = BFstring
 
 
 //Alex's functions above this line ¯\_(ツ)_/¯