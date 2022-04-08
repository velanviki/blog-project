import './single.css';
import Sidebar from "../../Components/sidebar/sidebar";
import SinglePost from '../../Components/singlepost/SinglePost';

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
         <Sidebar/>
    </div>
  )
}
