import ProductCard from "@/components/cards";


export default function Home() {
  return (
    <div>
        <div className="h-screen bg-gradient-to-b from-yellow-500  to-white">
          <header className=" bg-gray-800 text-white ml-48 mr-48 rounded-b-3xl *">
            <nav className="container mx-auto p-4 pt-4">
              <ul className="flex justify-center space-x-8">
                <li><a href="#" className="hover:text-orange-600 delay-200">Best Sellers</a></li>
                <li><a href="#" className="hover:text-orange-600 delay-200">Gift Ideas</a></li>
                <li><a href="#" className="hover:text-orange-600 delay-200">New Releases</a></li>
                <li><a href="#" className="hover:text-orange-600 delay-200">Today's Deals</a></li>
                <li><a href="#" className="hover:text-orange-600 delay-200">Customer Service</a></li>
              </ul>
            </nav>
          </header>
          <h1 className="text-white text-4xl flex justify-center pt-10 font-extrabold">Eflyer</h1>
          <div className="flex mt-10">
            <select className="ml-60 bg-slate-800 text-white py-2 px-4 rounded-l mr-32">
          <option className="">All Category</option>
            <option value="fashion">Action</option>
            <option value="electronics">another action</option>
            <option value="fashion">Something else here</option>
          </select>
            <input className=" rounded-lg pr-10 pl-10" type="search" name="Search" placeholder="Search" />
            <button className="bg-orange-500 text-white px-4 rounded S">🔍</button>
          <select className="ml-40 bg-slate-800 text-white py-2 px-4 rounded-l mr-32">
            <option className="Uk"image="" >English</option>
            <option value="fashion">France</option>
          </select>
          </div>
          <h1 className="text-white font-extrabold flex justify-center mt-10 text-6xl">Get Start </h1>
          <h1 className="text-white font-extrabold flex justify-center mt-10 text-6xl">Your favriot shoping</h1>
          <button type="button" className="ml-auto mr-auto flex justify-center pr-10 pl-10  hover:bg-orange-500 delay-200 mt-10  text-white bg-gray-800 focus:outline-none focus:ring-4
           focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
           dark:focus:ring-gray-700 dark:border-gray-700">Buy Now</button>
         </div>

         {/* section 2 */}
          
          <div>
            <h1 className=" font-extrabold text-5xl flex justify-center ">Man & Woman fashion</h1>
          </div>
          <div className=" mt-10">
            <div className="flex justify-evenly ">
            <ProductCard 
            name = 'Man T-shirt' 
            description= 'man basic Tee'
            price='45'
            image=' https://html.design/demo/eflyer/images/tshirt-img.png '
            />
            <ProductCard 
            name = 'Man T-shirt' 
            description= 'man basic Tee'
            price='24'
            image=' https://html.design/demo/eflyer/images/dress-shirt-img.png '
            />
            <ProductCard 
            name = 'Woman Dress' 
            description= 'Woman'
            price='76'
            image='https://html.design/demo/eflyer/images/women-clothes-img.png '
            />
            </div>
            
            {/* second row */}
            <div className="flex justify-evenly mt-10 mb-10">
            <ProductCard 
            name = 'Man pants' 
            description= 'man pant'
            price='80'
            image=' https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYKV5JYYpBO22o38RGANoJsFKj1uLpV-
            iTJVbeEFbOtzKoH7WMtr7jjOrSG8bmASjGm__T_JGrl6ja9IXUNV8o91-CQO6btXSy_4KTdfQmn1bLDTI58J7XBbWm-QmOQdgjn-zGtYwcrA&usqp=CAc '
            />
            <ProductCard 
            name = 'Man coat' 
            description= 'man coat'
            price='170'
            image=' https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSarGuQ3iEpOccTAxTpdnQLI2-wgI-mU7U8pSJ_Uyvcy4JoYOz_
            FHOY0xGp09TgIbpdnTbydDg7SKfmkuMiHr3DDi0-uLgKfI_VmJb6HNFn6QZBmkPbPtzZSnWT5fKjTlVRGyjvc7M&usqp=CAc '
            />
            <ProductCard 
            name = 'man hoodie' 
            description= 'Hoodie'
            price='90'
            image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUWat6ybcqJLHGXI37EN9ZOGwpBtk9oLctii0t6gTnvc7Qd7nUsCnaRSMXy60XZ5TyVo5e6p-
            M5u5iqaEbnJnPtXgZY0mr7toHz7AQsV-Wh259W_9zSWWRTwWBInC5OcnN1SXbdA&usqp=CAc '
            />
            </div>
            
          </div>
          {/* footer */}
          <div>
          <footer className="bg-gray-800 text-white text-center py-10">
    <h2 className="text-2xl font-semibold mb-4">Eflyer</h2>
    <div className="flex justify-center items-center space-x-3 mb-6">
      <input type="email"  className="px-4 py-2 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Email" />
     
      <button className="px-5 py-2 bg-orange-500 rounded-md text-white font-semibold hover:bg-orange-600">
        SUBSCRIBE
      </button>
    </div>
    <nav class="flex justify-center space-x-6 mb-4 text-gray-400">
      <a href="#" className="hover:text-white">Best Sellers</a>
      <a href="#" className="hover:text-white">Gift Ideas</a>
      <a href="#" className="hover:text-white">New Releases</a>
      <a href="#" className="hover:text-white">Today's Deals</a>
      <a href="#" className="hover:text-white">Customer Service</a>
    </nav>
    <p className="text-gray-500 mb-2">Help Line Number: +1 1800 1200 1200</p>
    <p className="text-gray-500">&copy; 2020 All Rights Reserved. Design by Free html Templates</p>
  </footer>
          </div>
    </div>
      );
    }

