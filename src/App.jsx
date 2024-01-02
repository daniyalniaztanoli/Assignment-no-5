import './App.css'
import { Button_Comp } from './Components/Button_Comp';
import {Brand_Comp} from './Components/Brand_Comp'
import { Nav_Comp } from './Components/Nav_Comp';
import { Cart_Comp } from './Components/Cart_Comp';
import { Caro1_Comp } from './Components/Caro1_Comp';
import { Caro2_Comp } from './Components/Caro2_Comp';
import { Banner_Comp } from './Components/Banner_comp';
import { NoteBanner_Comp } from './Components/NoteBanner_Comp';
import { Cards_Comp } from './Components/Cards_Comp';
import { Banner2_Comp } from './Components/Banner2_Comp';
import { Banner2text_Comp } from './Components/Banner2text_Comp';
import { Cards2_Comp } from './Components/cards2_Comp';
import { Footer_Comp } from './Components/Footer_Comp';

const App = () =>{
  return (
    <div>
      {/* sec 1 */}
  <div className='bg_img'>
    <div className='flex justify-around'>
    <Brand_Comp/>
    <Nav_Comp/>
    <Cart_Comp/>
  </div>
  {/* sec 2 */}
  <div className='flex'>
    <Caro1_Comp/>
    <Caro2_Comp/>
  </div>
  </div>
  {/* sec 3 */}
  <Banner_Comp/>
  <NoteBanner_Comp heading="Best Sell" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
  {/* sce 4 */}
  <Cards_Comp/>
  {/* sec 5 */}
  <div className='w-[80%]  flex mx-auto'>
    <div className='w-[50%]'>
   <Banner2_Comp/>
   </div>
   <div className='w-[50%]'>
   <Banner2text_Comp/>
   </div>
  </div>
  <NoteBanner_Comp heading="All Products" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
  <Cards_Comp/>
  <Cards2_Comp/>
<div>
<Footer_Comp/>
</div>
</div>
  )
}
export default App;
