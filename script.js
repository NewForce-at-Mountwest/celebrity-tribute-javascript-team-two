const linData = {
  // newsfeed: [
  //   {
  //     title: "Lin Manuel Miranda Working on Moana Sequel",
  //     url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
  //     date: "1/23/19"
  //   },
  //   {
  //     title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
  //     url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
  //     date: "1/25/19",
  //   },
  //   {
  //     title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
  //     url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
  //     date: "1/25/19",
  //   },
  //   {
  //     title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
  //     url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
  //     date: "1/25/19"
  //   },
  //   {
  //     title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
  //     url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
  //     date: "1/16/19"
  //   },
  //   {
  //     title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
  //     url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
  //     date: "1/8/19"
  //   }

  // ],
  // personalLife: {
  //   birthDate: "January 16, 1980",
  //   birthLocation: "New York City",
  //   cityOfResidence: "New York City",
  //   nationality: "Puerto Rican, American",
  //   family: {
  //     spouse: "Vanessa Nada",
  //     kids: ["Sebastian Miranda",
  //       "Francisco Miranda"
  //     ],
  //     parents: ["Luis A. Miranda, Jr.",
  //       "Luz Towns-Miranda"],
  //     pets: ["Tobillo", "Toby"]
  //   }
  // },

    career: {
      shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
      MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
      notableRoles: ["Usnavi", "Alexander Hamilton"],
      notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
      awards: ["Multiple Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
    },
}

//     let musicalsHTMLString = "";
//     let rolesHTMLString = "";
//     let songsHTMLString = "";
//     let awardsHTMLString = "";

//     for (let i = 0; i < linData.career.MusicalsWritten.length; i++) {
//         musicalsHTMLString = musicalsHTMLString + linData.career.MusicalsWritten[i]
//         console.log(musicalsHTMLString);
//     }

//     for (let i = 0; i < linData.career.notableRoles.length; i++) {
//             rolesHTMLString = rolesHTMLString + linData.career.notableRoles[i]
//             console.log(rolesHTMLString);
//     }

//     for (let i = 0; i < linData.career.notableSongs.length; i++) {
//             songsHTMLString = songsHTMLString + linData.career.notableSongs[i]
//             console.log(songsHTMLString);
//     }

//     for (let i = 0; i < linData.career.awards.length; i++) {
//             awardsHTMLString = awardsHTMLString + linData.career.awards[i]
//             console.log(awardsHTMLString);
//     }
    
//     const careerHTMLString = `<h2 class="career-intro">${linData.career.shortIntro}</h2> <ul class="career-musicals"${musicalsHTMLString}</ul> <ul class="career-roles">${rolesHTMLString}</ul> <ul class="career-songs">${songsHTMLString}</ul> <ul class="career-awards">${awardsHTMLString}</ul>`
//     console.log (careerHTMLString) 

// document.querySelector("#career").innerHTML = careerHTMLString;

const ul_function = (title, header, style) => {
  // return `<ul class ="${style}">${title}</ul>`
let listString = "";
for (let i = 0; i < title.length; i++){
  listString = listString + `<li>${title[i]}</li>`
  console.log(listString)

}
 return `<div><h3>${header}</h3><ul>${listString}</ul></div>` 
}

const musicalsString = ul_function(linData.career.MusicalsWritten, "Music Written");
const rolesString = ul_function(linData.career.notableRoles, "Notable Roles");
const songsString = ul_function(linData.career.notableSongs, "Notable Songs");
const awardsString = ul_function(linData.career.awards, "Awards Conferred")

console.log(musicalsString, songsString, songsString, awardsString)
document.querySelector("#career").innerHTML = `<div><H2>${linData.career.shortIntro}</h2>${musicalsString}${rolesString}${songsString}${awardsString}`




//     executiveSummary: {
//       knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee         Elise Goldsberry", "Phillipa Soo"],
//       image: {
//         photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
//         caption: "Lin Manuel Miranda Headshot"
//       },
//       listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
//       countryOfResidence: "United States"
//     }
//   }
//   extrasReport: {
//     onlineResources: [
//         {
//             name: "Wikipedia",
//             url: "https://en.wikipedia.org/wiki/Lin-Manuel_Miranda"
//         },
//         {
//             name: "Official Website",
//             url: "http://www.linmanuel.com/"
//         },
//         {
//             name: "Fan Website",
//             url: "https://linmiranda.com/"
//         }
//     ],
//     placesToViewWork: [
//         {
//             name: "Youtube",
//             url: ""
//         },
//         {
//             name: "Broadway",
//             url: ""
//         }
//     ],
//     pastShowDates: ["January 15, 2019", "December 12, 2018", "October 7, 2018", "September 4, 2018", "August 1, 2018", "July 19, 2018", "July 2, 2018", "June 18, 2018", ]

// }
// }




