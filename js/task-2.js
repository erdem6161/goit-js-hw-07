const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
    
  ];
  
  const gallery = document.querySelector(".gallery");
  
  images.map((image) => {
    const list = document.createElement("li");
    list.classList.add("list");
  
    const img = document.createElement("img");
    img.classList.add("list-item");
    img.setAttribute("src", image.url);
    img.setAttribute("alt", image.alt);
  
    gallery.appendChild(list);
    list.appendChild(img);
  });