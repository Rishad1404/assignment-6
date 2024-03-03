// const searchBtn=document.getElementById('search-btn')

// searchBtn.addEventListener('click',()=>{
//     // loadPosts()
    
// })
const loadPosts=async ()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data=await res.json();
    const posts=data.posts;
    displayPosts(posts);
}

const displayPosts=posts=>{
    // console.log(posts);

    // Access to post container div
    const postContainer=document.getElementById('post-container');
    posts.forEach(post=>{
        // console.log(post)

        // Create the post container div
        const postCard=document.createElement('div')
        postCard.classList='lg:flex gap-5 bg-[#797dfc1a] border-1 border-solid border-[#797DFC] p-8 mb-10 w-full';
        // Set inner html
        postCard.innerHTML=`
                        <div>
                            <div class="avatar online">
                                <div class="w-24 rounded-full">
                                    <img src="${post.image}" />
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
                
                            <div class="flex justify-between mt-5 ">
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
    })
}
// Handle search button



loadPosts()