
/* ===========================[Variables]================================ */
const USERNAME = document.getElementById("cmntUser");
const STOREDUSERNAME = localStorage.getItem('username');
const PRODID = "";
const PROFILEIMAGE = document.getElementById("profileImage")
const SENDBUTTON = document.getElementById("sendBtn");
const PRIVATEBUTTON = document.getElementById("privateBtn");
const DELETEBUTTON = document.getElementById("deleteBtn");
const RATE = document.getElementsByName("rating")
const TEXTAREA = document.getElementById("cmntText")
const DATETIME = document.getElementById('dateTime')
const NEWCOMMENT = document.getElementById('newCommentBtn')
const COMMENTAREA = document.getElementById("commentsArea")
let PRIV = false;
let hiddenArea = true;
let NOWTIME;
let NOWDATE;
let COMMENTID = 0;
const storagedComments = localStorage.getItem('comment');
            /* ===========[Variables RadioBtn]================= */ 

const STAR1 = document.getElementById("star1");
const STAR2 = document.getElementById("star2");
const STAR3 = document.getElementById("star3");
const STAR4 = document.getElementById("star4");
const STAR5 = document.getElementById("star5");

/* ===========================[Date Time]============================= */

function updateDateTime() {
    const ACTUALDATE = new Date();
    const DAY = ACTUALDATE.getDate();
    const MONTH = ACTUALDATE.getMonth() + 1;
    const YEAR = ACTUALDATE.getFullYear() % 100;
    const HOURS = ACTUALDATE.getHours();
    const MINUTES = ACTUALDATE.getMinutes();

    function formatMinutes(minutes) {
        return minutes < 10 ? `0${minutes}` : minutes;
    }

    const FORMATEDDATE = `${MONTH}/${DAY}/${YEAR}`;
    const FORMATEDHOURS = `${HOURS}:${formatMinutes(MINUTES)}`;

    NOWDATE = FORMATEDDATE;
    NOWTIME = FORMATEDHOURS;

    document.getElementById('dateTime').textContent = `${FORMATEDDATE} ${FORMATEDHOURS}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);

/* =============================[Delete Button]=============================== */

DELETEBUTTON.addEventListener("click", ()=>{
    TEXTAREA.value = "";
    for (button of RATE){
        button.checked = false;
    }
})

/* ==============================[private Button]================================ */

PRIVATEBUTTON.addEventListener("click", () => {
    if (PRIV == false){
        PRIV = true;
        USERNAME.innerHTML = "Authorless"; 
        PROFILEIMAGE.setAttribute("src", 'img/img_perfil_private.png');
    } else {
        PRIV = false;
        USERNAME.textContent = STOREDUSERNAME; 
        PROFILEIMAGE.setAttribute("src", 'img/img_perfil.png');
    }
});

/* ==============================[show product]================================ */
const CONTAINER = document.getElementById("product-container");
const COMMENTS = document.getElementById("comments");
let currentProduct = {};
let commentaries = [];
function showProduct() {
	let htmlContentToAppend = "";

	document.getElementById("title").innerHTML = `${currentProduct.name} <hr>`;
  
	htmlContentToAppend = `
    <div id="info-image-container">
      <div class="image-container">
        <div class="subtitle">Imágenes ilustrativas</div>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img  src="${currentProduct.images[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img  src="${currentProduct.images[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img  src="${currentProduct.images[2]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img  src="${currentProduct.images[3]}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      <div id="info-container">
   
        <div class="subtitle">Precio</div>
        <div>${currentProduct.currency} ${currentProduct.cost}</div>
        <div class="subtitle">Descripción</div>
        <div>${currentProduct.description}</div>
        <div class="subtitle">Categoría</div>
        <div>${currentProduct.category}</div>
        <div class="subtitle">Cantidad de Vendidos</div>
        <div>${currentProduct.soldCount}</div>
        <input type="button" name="addToCart" id="addToCartBtn" value="Add to cart">
        </div> 
    </div>
    `;
	CONTAINER.innerHTML = htmlContentToAppend;
}

/* ==============================[Show comment]================================ */

function showComments(array) {
  const PRODID = currentProduct.id;
  console.log(PRODID)
	let commentsToAppend = "";
	for (let i = 0; i < array.length; i++) {
   if(array[i].product == PRODID){
    if(array[i].user == STOREDUSERNAME){
      commentsToAppend += `
       <div class="comment-box">
          <div class="d-flex w-100 justify-content-between">
          <div class="d-flex">
            <h6><b>${array[i].user}</b></h6>-
            <span  class="fa fa-star star "></span>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
          </div>
          <input type="image" src="img/delete_btn.png" name="DeleteComment" class="deleteCmntBtn" data-comment-id="${array[i].commentID}" value="Delete">
          <small>${array[i].dateTime}</small>
      </div>
            <div class="comment-description">${array[i].description}</div>
        </div>`;
    }else{
      commentsToAppend += `
      <div class="comment-box ">
         <div class="d-flex w-100 justify-content-between">
         <div class="d-flex">
           <h6><b>${array[i].user}</b></h6>-
           <span  class="fa fa-star star "></span>
           <span class="fa fa-star star"></span>
           <span class="fa fa-star star"></span>
           <span class="fa fa-star star"></span>
           <span class="fa fa-star star"></span> 
         </div>
         <small>${array[i].dateTime}</small>
     </div>
           <div class="comment-description">${array[i].description}</div>
       </div>`;
   }
    }
	}

	COMMENTS.innerHTML = commentsToAppend;

	let coment = document.getElementsByClassName("comment-box");
	for (let i = 0; i < coment.length; i++) {
		let star = coment[i].getElementsByClassName("star");
		for (let j = 0; j < array[i].score; j++) {
			star[j].classList.add("checked");
		}
	}
}



            /* ===========[list Comments]================= */

document.addEventListener("DOMContentLoaded", async function (e) {
    try {
        const productResponse = await getJSONData(PRODUCT_INFO_URL + localStorage.ProductID + ".json");
        if (productResponse.status == "ok") {
            currentProduct = productResponse.data;
            showProduct();
        }

        const commentsResponse = await getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.ProductID + ".json");
        if (commentsResponse.status == "ok") {
            const commentaries = commentsResponse.data;
            const combinedComments = commentaries.concat(JSON.parse(storagedComments));
            showComments(combinedComments);
        }
    } catch (error) {
        console.error("Error en la carga de datos:", error);
    }
});

            /* ===========[Update Comments]================= */ 

function updateComments() {
  getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.ProductID + ".json").then(function (result) {
      if (result.status == "ok") {
          const commentaries = result.data;
          const storagedComments = localStorage.getItem('comment');
          
          if (storagedComments) {
              const parsedComments = JSON.parse(storagedComments);
              const combinedComments = commentaries.concat(parsedComments);
              showComments(combinedComments);
          }
      }
  });
}


/* ==================================================================== */

document.addEventListener("DOMContentLoaded", ()=> {
	USERNAME.textContent = STOREDUSERNAME;
});

/* ==============================[send Button]================================ */
function setRateIndex(){
  if (STAR1.checked){
    return 5;
  }if (STAR2.checked) {
    return 4;
  }if (STAR3.checked) {
    return 3;
  }if (STAR4.checked) {
    return 2;
  }if (STAR5.checked) {
    return 1;
  }else{
    return 0;
  }

}
function saveOnLocalStorage(){
    let comment = JSON.parse(localStorage.getItem("comment")) || [];
    if (!Array.isArray(comment)) {
        comment = [];
    }

    let newComment = {
        "product": currentProduct.id,
        "score": setRateIndex(),
        "description": TEXTAREA.value,
        "user": USERNAME.textContent,
        "dateTime": NOWDATE + " " + NOWTIME,
        "commentID": COMMENTID
      };

      comment.push(newComment);

      localStorage.setItem("comment", JSON.stringify(comment))
}

SENDBUTTON.addEventListener("click", ()=>{
    let comment = JSON.parse(localStorage.getItem("comment")) || [];
    if (Array.isArray(comment) && comment.length > 0) {
      COMMENTID = comment[comment.length - 1].commentID + 1;
    } else {
      COMMENTID = 0;
    }
    saveOnLocalStorage();
    COMMENTID++;
    TEXTAREA.value = "";
    for (button of RATE){
        button.checked = false;
    }
    updateComments();
})
    
            /* ===========[Delete Comments]================= */

document.addEventListener("DOMContentLoaded", function (e) {
  let commentCreator = JSON.parse(localStorage.getItem("comment"));
  if (!commentCreator) {
      localStorage.setItem('comment', (JSON.stringify([])));
  }

  COMMENTS.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteCmntBtn')) {
      const commentId = parseInt(event.target.getAttribute('data-comment-id'));
      const storagedComments = JSON.parse(localStorage.getItem('comment'));
      if (Array.isArray(storagedComments)) {
        const updatedComments = storagedComments.filter(comment => comment.commentID !== commentId);
        localStorage.setItem('comment', JSON.stringify(updatedComments));
        updateComments();
      }
    }
  });
});
/* ==============================[New Comment Button]================================ */

NEWCOMMENT.addEventListener("click", ()=>{
  if (hiddenArea === true) {
    hiddenArea = false;
    COMMENTAREA.style.transform = "translateY(0px)";
  } else {
    hiddenArea = true;
    COMMENTAREA.style.transform = "translateY(300px)";
  }
})