const getCats = async ()=>{
  let res = await fetch("https://aws.random.cat/meow");
  let result = await res.json();

  return result;
}

export default getCats;