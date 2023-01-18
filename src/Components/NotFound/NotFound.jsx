import HeaderSection from "../Header/HeaderSection";
import mrbean from "../NotFound/mr-bean.gif"
import './gif.css'

export default function NotFound() {
  return (
    <>
    <HeaderSection title={'Not Found'}/>
    <div className="text-center p-5">
      
      <h2 className="text-center p-5">Not Found Page</h2>
      <img className="gif rounded-circle" src={mrbean} alt="mrbean" />
    </div>
    </>
  );
}
