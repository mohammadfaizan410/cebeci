import Hero from "../ui/hero/hero"
import Services from "../ui/services/services"
import Categories from "../ui/home/categories/catgories"
import Videos from "../ui/home/videos/videos"
export default function Home(){
    return (
        <div>
            <Hero props={{
                title: "Welcome to Cebeci Makina",
                description: "Providing the best fastening solutions for your needs.",
                image: "/main.jpg"
            }}/>
            <Categories/>
            <Services/>
            <Videos/>``
        </div>
    )
}