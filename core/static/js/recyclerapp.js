var mapOptions = {
  center: [35.3180305, 25.1018764],
  zoom: 17
}
var editState = false;
var map = new L.map('map');
var layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors', maxZoom: 25, maxNativeZoom: 19 });
map.addLayer(layer);
map.locate({ setView: true, maxZoom: 17 });
var popup = L.popup();
var markers = L.markerClusterGroup();


function onMapClick(e) {
  if (editState) {
    var htmlPopup = `<a href="https://backend.recyclair.eu.org/setbins?xPos=` + e.latlng.lat + `&yPos=` + e.latlng.lng + `&binType=0&binEnabled=true">Add Garbage bin`
    var popupCss = ``
    popup
      .setLatLng(e.latlng)
      .setContent(popupCss + `<button id="addWasteBasket" style="width:100%;margin-bottom:5px;"type="button" class="btn btn-outline-primary"> Add Waste Basket</button>
<br><button id="addGarbageBin" style="width:100%;margin-bottom:5px;"type="button" class="btn btn-outline-primary"> Add Garbage Bin</button>
      <br><button id="addRecyclingBin" type="button" style="width:100%;margin-bottom:5px;"class="btn btn-outline-primary">Add Recycling Bin</button>
      <br><button id="addBothBin" type="button" style="width:100%"class="btn btn-outline-primary">Add Recycling and Gargabe Bin</button>`)
      .openOn(map);
    document.getElementById("addGarbageBin").onclick = function () {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          console.log("successfully added a bin to the database");

      }
      addPoint("Garbage bin", "garbage", e.latlng.lat, e.latlng.lng);
          
    }

    document.getElementById("addWasteBasket").onclick = function () {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          console.log("successfully added a bin to the database");

      }
      addPoint("Waste basket", "waste", e.latlng.lat, e.latlng.lng);
     
      
    };
    document.getElementById("addRecyclingBin").onclick = function () {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          console.log("successfully added a bin to the database");

      }
      addPoint("Recycling bin", "recycling", e.latlng.lat, e.latlng.lng);
     
      
    };
    document.getElementById("addBothBin").onclick = function () {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          console.log("successfully added a bin to the database");

      }
      addPoint("Waste and recycling bin", "both", e.latlng.lat, e.latlng.lng);
      
      
    };
  };
}
map.on('click', onMapClick);
var zoomState = false;
var currentZoomLevel = -1;
var currentZoomState = false;
var res;
// map.on("moveend", function () {
//   if (map.getZoom() >= 14) {
//     if (!zoomState) {
//       if (!currentZoomState) {
//         currentZoomLevel = map.getZoom();
//         currentZoomState = true;
//         res = map.getBounds().toBBoxString().split(",")
//       }
//       if (map.getZoom() == currentZoomLevel) {
//         console.log(map.getBounds())
//         //var res = map.getBounds().toBBoxString().split(",")
//         try {
//           xmlΗttp.open("GET", "https://backend.recyclair.eu.org/getbins?sw_lat=" + res[1] + "&sw_lon=" + res[0] + "&ne_lat=" + res[3] + "&ne_lon=" + res[2], true);
//           xmlΗttp.send();
//         }
//         catch {
//           console.log("Error in backend.recyclair.eu.org/getbins?");
//         }
//         var modal = document.getElementById('loadingModal');
//         modal.style.display = "block";
//         zoomState = true;
//       }
//     }

//     var currBounds = map.getBounds().toBBoxString().split(",")
//     var currCenter = map.getCenter();
//     var idk = L.latLng(currCenter);


//     if (idk.lng > res[2]) {
//       markers.clearLayers();
//       res = map.getBounds().toBBoxString().split(",");
//       try {
//         xmlΗttp.open("GET", "https://backend.recyclair.eu.org/getbins?sw_lat=" + res[1] + "&sw_lon=" + res[0] + "&ne_lat=" + res[3] + "&ne_lon=" + res[2], true);
//         xmlΗttp.send();
//       } catch {
//         console.log("Error in backend.recyclair.eu.org/getbins?");
//       }
//       var modal = document.getElementById('loadingModal');
//       modal.style.display = "block";
//       console.log("have to load new bins 1")
//     }
//     if (idk.lng < res[0]) {
//       console.log("have to load new bins 2")
//       markers.clearLayers();
//       res = map.getBounds().toBBoxString().split(",");
//       try {
//         xmlΗttp.open("GET", "https://backend.recyclair.eu.org/getbins?sw_lat=" + res[1] + "&sw_lon=" + res[0] + "&ne_lat=" + res[3] + "&ne_lon=" + res[2], true);
//         xmlΗttp.send();
//       } catch {
//         console.log("Error in backend.recyclair.eu.org/getbins?");
//       }
//       var modal = document.getElementById('loadingModal');
//       modal.style.display = "block";
//     }
//     if (idk.lat > res[3]) {
//       console.log("have to load new bins 3");
//       markers.clearLayers();
//       res = map.getBounds().toBBoxString().split(",");
//       try {
//         xmlΗttp.open("GET", "https://backend.recyclair.eu.org/getbins?sw_lat=" + res[1] + "&sw_lon=" + res[0] + "&ne_lat=" + res[3] + "&ne_lon=" + res[2], true);
//         xmlΗttp.send();
//       } catch {
//         console.log("Error in backend.recyclair.eu.org/getbins?");
//       }
//       var modal = document.getElementById('loadingModal');
//       modal.style.display = "block";
//     }
//     if (idk.lat < res[1]) {
//       console.log("have to load new bins 4")
//       markers.clearLayers();
//       res = map.getBounds().toBBoxString().split(",");
//       try {
//         xmlΗttp.open("GET", "https://backend.recyclair.eu.org/getbins?sw_lat=" + res[1] + "&sw_lon=" + res[0] + "&ne_lat=" + res[3] + "&ne_lon=" + res[2], true);
//         xmlΗttp.send();
//       } catch {
//         console.log("Error in backend.recyclair.eu.org/getbins?");
//       }
//       var modal = document.getElementById('loadingModal');
//       modal.style.display = "block";
//     }
//   }
//   if (currentZoomLevel >= 14 && zoomState) {
//     // markers.clearLayers();
//     //na kanei update vazontas mono ta auta poy einai ektos tou bound poy exei valei idi
//     //zoomState = false;

//   }
//   if (map.getZoom() < 14) {
//     currentZoomState = false;
//     zoomState = false;
//     markers.clearLayers();

//   }
// });
L.control.locate({ locateOptions: { enableHighAccuracy: true, maxZoom: 16 } }).addTo(map);

var xmlΗttp = new XMLHttpRequest();
xmlΗttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

    var modal = document.getElementById('loadingModal');
    modal.style.display = "none";
  }
};

function changeEditState() {
  var btnContext = document.getElementById("enableEdit");
  if (editState) {
    editState = false;
    btnContext.innerText = "Add bin";
  }
  else {
    editState = true;
    btnContext.innerText = "Stop editing";
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    setTimeout(function () {
      modal.style.display = "none";
    }, 2000);
  }
}

map.addLayer(markers);

//Copyright Alexandros Tselikas