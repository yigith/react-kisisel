import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";

function Anasayfa() {
    return (
        <div>
            <h2>Anasayfa</h2>
            <Alert variant="primary" className="mt-1">
                <FontAwesomeIcon icon={["far", "smile-wink"]} />{" "}
                Siteme hoşgeldiniz.
            </Alert>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequatur maiores dolores esse quisquam, facilis nobis amet enim adipisci? Quae explicabo id quas voluptatum, enim velit nam nobis dolore aliquid quaerat ullam odio? Magnam ipsam labore rem mollitia dolorem magni, sapiente modi, eveniet quasi ratione aut minus tempora? Accusamus quidem officiis dolor officia consequatur ipsam inventore neque dolore, velit voluptate minima impedit commodi repudiandae tenetur aut cupiditate qui vel, quis earum sint? Quaerat odit aut adipisci nostrum neque quia excepturi rerum placeat est fugit saepe tempora voluptatum harum, quidem dolorum perferendis fuga, dignissimos magni amet distinctio? Sit aliquid error molestias.</p>
        </div>
    );
}

export default Anasayfa;
