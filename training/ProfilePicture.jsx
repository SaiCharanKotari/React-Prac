
function ProfilePicture(){
  const imgUrl='./src/assets/saiprofile.jpg';

  const handleClick = (e) =>{
    e.target.style.display="none";
  };
  return (
    <img onClick={handleClick} src={imgUrl}></img>
  );
}

export default ProfilePicture