const posts=[
    {title:"post one",body:"this is post 1"},
    {title:"post two", body:"this is post 2"}
    
];

const getpost = ()=>{
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;
    },1000)
}
create
getpost();