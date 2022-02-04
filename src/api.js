export async function fetchImages(breed) {
  // const response = await fetch(
  //   `https://dog.ceo/api/breed/${breed}/images/random/12`
  // );
  // const data = await response.json();



  const response = await fetch(
      'https://ghibliapi.herokuapp.com/films'
    );
    const data = await response.json();
    const res=[];
    data.map((url)=>{
    res.push(url.image);
    });

    


  return res;
}