// list the properties Q1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student));


//Q2
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  
  console.log(student);
  delete student.rollno;
  console.log(student);
  //Q3
  var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  var key;
  var count = 0;
  for (key in student) {
    if (student.hasOwnProperty(key)) count++;
  }
  console.log(count);

  //Q4
  var library = [
    {
      title: "Bill Gates",
      author: "The Road Ahead",
      readingStatus: true,
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      readingStatus: true,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      readingStatus: false,
    },
  ];
  
  for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else {
      console.log("You still need to read " + book);
    }


    //Q5


    class Cylinder {
        constructor(cylHeight, cylDiameter) {
          this.cylHeight = cylHeight;
          this.cylDiameter = cylDiameter;
        }
        Volume() {
          var radius = this.cylDiameter / 2;
          return this.cylHeight * Math.PI * radius * radius;
        }
      }
      
      var cyl = new Cylinder(7, 4);
      console.log("volume =", cyl.Volume().toFixed(4));

     
      //Q6
        
var library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      libraryID: 1254,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      libraryID: 4264,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  
  var sortable = [];
  for (var id in library) {
    sortable.push(library[id]["libraryID"]);
  }
  
  sortable.sort((a, b) => b - a);
  
  for (const j in library) {
    for (var k in library) {
      if (sortable[j] == library[k].libraryID) {
        console.log(library[k]);
      }
    }
  }}