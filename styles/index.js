
const loadPosts=async (searchText)=>{
    
    const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data=await res.json();
    const posts=data.posts;
    displayPosts(posts);
}

const displayPosts=posts=>{
    // console.log(posts);

    // Access to post container div
    const postContainer=document.getElementById('post-container');

    postContainer.textContent=''
    posts.forEach(post=>{
        // console.log(post)
        
        
        
        
        // Create the post container div
        const postCard=document.createElement('div')
        postCard.classList='lg:flex gap-5 bg-[#797dfc1a] border-1 border-solid border-[#797DFC] p-8 mb-10 ';
        // Set inner html   
        postCard.innerHTML=`
                        <div>
                            <div class="avatar relative">
                                <div class="w-24 mask mask-squircle">
                                <img src="${post.image}" />
                            </div>
                            <div  class="active-status h-4 w-4 rounded-full bg-white absolute ml-[80px]">
                                
                            </div>
                        </div>
                        </div>
                        <div>
                            <div class="flex gap-5">
                                <p># ${post.category}</p>
                                <p>Author: ${post.author.name}</p>
                            </div>
                            <h3 class="text-xl mt-2 mb-3 font-bold">${post.title}</h3>
                            <p>${post.description}
                            </p>
                
                            <hr class="border-t border-dashed border-black my-4">
                
                            <div class="flex justify-between items-start mt-5 w-auto">
                                <div class="flex gap-6 items-center">
                                    <div class="flex gap-4 items-center">
                                        <img src="images/tabler-icon-message-2.svg" alt="">
                                        <p>${post.comment_count}</p>
                                    </div>
                                    <div class="flex gap-4 items-center">
                                        <img src="images/tabler-icon-eye.svg" alt="">
                                        <p>${post.view_count}</p>
                                    </div>
                                    <div class="flex gap-4 items-center">
                                        <img src="images/tabler-icon-clock-hour-9.svg" alt="">
                                        <p>${post.posted_time} min</p>
                                    </div>
                                </div>
                                <button><img src="images/email 1.svg" alt=""></button>
                            </div>
                        </div>
        `;
        postContainer.appendChild(postCard);

        const activeStatusElements = postCard.getElementsByClassName('active-status');
        const activeStatus = activeStatusElements[0]; 
        if (post.isActive) {
            activeStatus.classList.add('bg-green-900');
        } else {
            
            activeStatus.classList.add('bg-red-700');
        }
    })
    // Hide loading spinner
    controlLoadingSpinner(false);
}
// Latest posts
function loadPosts2(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    .then(res=>res.json())
    .then(data=>{

        const latestPostContainer=document.getElementById('latest-container')
        data.forEach(item=>{
            const latestPostCard=document.createElement('div');
            latestPostCard.classList='';
            latestPostCard.innerHTML=`
            <div class="card w-96 bg-base-100 shadow-xl my-10">
                        <figure class="px-10 pt-10">
                          <img src="${item.cover_image}" alt="" class="rounded-xl" />
                        </figure>
                        
                        <div class="card-body text-left">
                            <div class="flex items-center gap-4">
                                <img src="images/Frame (1).svg" alt="">
                                <p class="">${item.author.posted_date}</p>
                            </div>
                          <h2 class="card-title font-bold my-4">${item.title}</h2>
                          <p>${item.description} </p>
                          <div class="card-actions my-5 ">
                            <img src="${item.profile_image}" class="w-12 rounded-full " alt="">
                            <div class=>
                                <h2 class="font-bold">${item.author.name}</h2>
                                <p>${item.author.designation}</p>
                            </div>
                          </div>
                        </div>
                </div>
            `;
            latestPostContainer.appendChild(latestPostCard)
        })
    })
}
    

const displayLatestPosts=data=>{
    console.log(data)
}
// Handle search button

const handleSearch=()=>{
    controlLoadingSpinner(true);
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    loadPosts(searchText)
    
}

const controlLoadingSpinner=(isLoading)=>{
    const loadingSpinner=document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}




loadPosts2()
loadPosts('')

