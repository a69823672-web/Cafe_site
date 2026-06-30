// باز کردن پنل
function openPanel(){
  document.getElementById("adminPanel").style.display = "block";
}

// ورود با رمز
function login(){
  const pass = document.getElementById("pass").value;

  if(pass === "4030"){
    document.getElementById("controls").style.display = "block";
  } else {
    alert("رمز اشتباهه ❌");
  }
}

// ذخیره اطلاعات
function save(){
  const price = document.getElementById("newPrice").value;
  const img = document.getElementById("newImg").value;

  if(price) localStorage.setItem("price", price);
  if(img) localStorage.setItem("img", img);

  alert("ذخیره شد ✅");
}

// اعمال تغییرات روی سایت
window.onload = function(){
  const price = localStorage.getItem("price");
  const img = localStorage.getItem("img");

  if(price){
    const priceEl = document.querySelectorAll(".item h3");
    if(priceEl.length) priceEl[0].innerText = "قیمت: " + price;
  }

  if(img){
    const imgEl = document.querySelectorAll(".item img");
    if(imgEl.length) imgEl[0].src = img;
  }
};
