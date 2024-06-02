const div = document.querySelector("div")

axios('https://fakestoreapi.com/products')

.then((res)=>{
console.log(res.data);
res.data.map((item)=>{
div.innerHTML+=`<div class="card d-flex" style="width: 18rem;">
<img width="100px" hight="10px" src="${item.image}" class="card-img-top" alt="image">
<div class="card-body">
  <h5 class="card-title">Title:${item.title}</h5>
  <p class="card-text">Price:${item.price}</p>
  
</div>
</div>
`
})
}).catch((err)=>{
    console.log(err);
})