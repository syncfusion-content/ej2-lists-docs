var continent = [
    {
        'text': 'Asia',
        'id': '01',
        'category': 'Continent',
        'child': [{
                'text': 'India',
                'id': '1',
                'category': 'Asia',
                'child': [{
                        'text': 'Delhi',
                        'id': '1001',
                        'category': 'India',
                    },
                    {
                        'text': 'Kashmir',
                        'id': '1002',
                        'category': 'India',
                    },
                    {
                        'text': 'Goa',
                        'id': '1003',
                        'category': 'India',
                    },
                ]
            },
            {
                'text': 'China',
                'id': '2',
                'category': 'Asia',
                'child': [{
                        'text': 'Zhejiang',
                        'id': '2001',
                        'category': 'China',
                    },
                    {
                        'text': 'Hunan',
                        'id': '2002',
                        'category': 'China',
                    },
                    {
                        'text': 'Shandong',
                        'id': '2003',
                        'category': 'China',
                    }]
            }]
    },
    {
        'text': 'North America',
        'id': '02',
        'category': 'Continent',
        'child': [{
                'text': 'USA',
                'id': '3',
                'category': 'North America',
                'child': [{
                        'text': 'California',
                        'id': '3001',
                        'category': 'USA',
                    },
                    {
                        'text': 'New York',
                        'id': '3002',
                        'category': 'USA',
                    },
                    {
                        'text': 'Florida',
                        'id': '3003',
                        'category': 'USA',
                    }]
            },
            {
                'text': 'Canada',
                'id': '4',
                'category': 'North America',
                'child': [{
                        'text': 'Ontario',
                        'id': '4001',
                        'category': 'Canada',
                    },
                    {
                        'text': 'Alberta',
                        'id': '4002',
                        'category': 'Canada',
                    },
                    {
                        'text': 'Manitoba',
                        'id': '4003',
                        'category': 'Canada',
                    }]
            }]
    },
    {
        'text': 'Europe',
        'id': '03',
        'category': 'Continent',
        'child': [{
                'text': 'Germany',
                'id': '5',
                'category': 'Europe',
                'child': [{
                        'text': 'Berlin',
                        'id': '5001',
                        'category': 'Germany',
                    },
                    {
                        'text': 'Bavaria',
                        'id': '5002',
                        'category': 'Germany',
                    },
                    {
                        'text': 'Hesse',
                        'id': '5003',
                        'category': 'Germany',
                    }]
            }, {
                'text': 'France',
                'id': '6',
                'category': 'Europe',
                'child': [{
                        'text': 'Paris',
                        'id': '6001',
                        'category': 'France',
                    },
                    {
                        'text': 'Lyon',
                        'id': '6002',
                        'category': 'France',
                    },
                    {
                        'text': 'Marseille',
                        'id': '6003',
                        'category': 'France',
                    }]
            }]
    },
    {
        'text': 'Australia',
        'id': '04',
        'category': 'Continent',
        'child': [{
                'text': 'Australia',
                'id': '7',
                'category': 'Australia',
                'child': [{
                        'text': 'Sydney',
                        'id': '7001',
                        'category': 'Australia',
                    },
                    {
                        'text': 'Melbourne',
                        'id': '7002',
                        'category': 'Australia',
                    },
                    {
                        'text': 'Brisbane',
                        'id': '7003',
                        'category': 'Australia',
                    }]
            }, {
                'text': 'New Zealand',
                'id': '8',
                'category': 'Australia',
                'child': [{
                        'text': 'Milford Sound',
                        'id': '8001',
                        'category': 'New Zealand',
                    },
                    {
                        'text': 'Tongariro National Park',
                        'id': '8002',
                        'category': 'New Zealand',
                    },
                    {
                        'text': 'Fiordland National Park',
                        'id': '8003',
                        'category': 'New Zealand',
                    }]
            }]
    },
    {
        'text': 'Africa',
        'id': '05',
        'category': 'Continent',
        'child': [{
                'text': 'Morocco',
                'id': '9',
                'category': 'Africa',
                'child': [{
                        'text': 'Rabat',
                        'id': '9001',
                        'category': 'Morocco',
                    },
                    {
                        'text': 'Toubkal',
                        'id': '9002',
                        'category': 'Morocco',
                    },
                    {
                        'text': 'Todgha Gorge',
                        'id': '9003',
                        'category': 'Morocco',
                    }]
            }, {
                'text': 'South Africa',
                'id': '10',
                'category': 'Africa',
                'child': [{
                        'text': 'Cape Town',
                        'id': '10001',
                        'category': 'South Africa',
                    },
                    {
                        'text': 'Pretoria',
                        'id': '10002',
                        'category': 'South Africa',
                    },
                    {
                        'text': 'Bloemfontein',
                        'id': '10003',
                        'category': 'South Africa',
                    }]
            }]
    }
];

var text, title, headerElement, backBtn, hasChild = false;

//Initialize ListView component
var listviewInstance = new ej.lists.ListView({
  //set the data to dataSource property
  dataSource: continent,
  // map the groupBy field with category column
  fields: { tooltip: "text" },
  headerTemplate: '<div class="header-content"><span>Continent</span></div>',
  showHeader: true,
  select: onSelect,
  actionComplete: onComplete
});
//Render initialized ListView
listviewInstance.appendTo("#listview");

backBtn = document.querySelector(".e-but-back");
title = document.querySelector(".header-content");
title.addEventListener("click", navigateBack);

function onSelect(e) {
  text = e.text;
  hasChild = !e.item.classList.contains("e-has-child");
}

function onComplete() {
  if (!hasChild) {
    headerElement = document.querySelector(".header-content").innerHTML;
    title = document.querySelector(".nested-header .header-content");
    if (headerElement && text != undefined) {
      // Create element with new clicked item in header
      var element = document.createElement("span");
      element.textContent = ` > ${text}`;
      title.appendChild(element);

      // Recalcualte levels, Since an element is added
      calculateLevelForElements();
    }
  }
}

backBtn.addEventListener("click", function () {
  var elements = document.querySelectorAll(
    ".nested-header .header-content span"
  );
  elements[elements.length - 1].remove();

  // Recalcualte levels, Since an element is removed
  calculateLevelForElements();

  if (backBtn.style.display == "none") {
    hasChild = false;
  } else {
    hasChild = true;
  }
});

// Calculate level for each header element
function calculateLevelForElements() {
  var elements = document.querySelectorAll(
    ".nested-header .header-content span"
  );
  let index = 0;
  for (let i = elements.length - 1; i >= 0; i--) {
    elements[index].level = i;
    index++;
  }
}

// Navigate back event handler based on element's level
function navigateBack(event) {
  if (event.target && event.target.level) {
    for (let i = 0; i <= event.target.level; i++) {
      backBtn.click();
    }
  }
}


