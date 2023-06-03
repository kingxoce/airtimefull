import { React, useRef, useEffect, useState} from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import volcanes from "./ImagenesVolcanes";
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import antigua from '../Imagenes/antigua.jpg'
import semuc from "../Imagenes/semucChampey.jpg";
import atitlan from "../Imagenes/atitlan.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Cookies from 'universal-cookie';

function Home() {
  const cookies = new Cookies();
  const [rol, setrol]=useState('');


    
  const[width,setWidth] = useState(0);
  const carusel = useRef();
  const [paquete, setPaquete] = useState([]);

  useEffect(() => {
    setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);

  const navigate = useNavigate();


  const peticionGet=async()=>{
    await axios.get("http://localhost:4000/paquete-get")
    .then(response=>{
      setPaquete(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    peticionGet();
    },[])






    
  return (
    <div className='home'>
        <Navbar />
        <div className="cuerpo">
          <h1>TURISMO GUATEMALTECO</h1>
        </div>
        <div>
          <Row className="tarjetas">
            <Col sm>
              <a><span>01</span>Viaje</a>
              <p>
              Guatemala es un destino turístico popular, y ofrece una amplia variedad de opciones para los viajeros, 
              desde explorar la cultura maya en sus sitios arqueológicos, hasta disfrutar de sus playas y 
              paisajes naturales. 
              </p>
            </Col>
            <Col sm className="exp">
              <a><span>02</span>Experiencia</a>
              <p>
                Viajar a Guatemala puede ser una experiencia emocionante y enriquecedora, 
                pero también es importante tener en cuenta algunos aspectos importantes antes de viajar.
              </p>
            </Col>
            <Col sm> 
              <a><span>03</span>Relajacion</a>
              <p>
                Los turistas también pueden disfrutar de la vibrante vida nocturna, la deliciosa comida 
                guatemalteca y la cálida hospitalidad de su gente.
              </p>
            </Col>
          </Row>
          <Row className="textOf">
            <Col>
              <h1>Ofertas especiales y descuentos</h1>
              <p>¡Embárcate en la aventura de tus sueños a precios increíbles con nuestras ofertas especiales y 
                descuentos en viajes! Descubre nuevos destinos, culturas y experiencias con nuestras promociones 
                exclusivas en paquetes turísticos, vuelos, alojamiento y más.
              </p>
            </Col>
          </Row>
          <motion.h1 className="text-volcan">Volcanes de Guatemala</motion.h1>
          <motion.div  ref={carusel} className="caruselVolcanes" whileTap={{ cursor: "grabbing" }} >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="inner-carousel">
              {volcanes.map(volcan => {
                return(
                  <motion.div className="item" key={volcan}>
                    <img src={volcan} alt=""/>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          <Row className="acercaDe">
          <Col>
              <h1>Que sabes<br></br>Sobre nosotros</h1>
              <p> Aquí en nuestra agencia de viajes, nos apasiona ayudarte a planificar la aventura de tus sueños. 
                Sabemos que cada viajero es único, y por eso, nos esforzamos por personalizar cada itinerario para satisfacer tus necesidades y
                deseos individuales.
              </p>
              <Button onClick={() =>{ navigate("/Acercade") }} variant="warning">Leer Más
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
              </Button>
          </Col>
          <Col>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/koIjcep1I4A?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Col>
          </Row>
          <Row className="productos">
            <h1>Plan de Vacaciones Perfecto</h1>
            <Col className="paquete-productos">
            
            {paquete &&
                        paquete.map((paq)=>(
            
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={paq.foto} />
                <Card.Body>
                  <Card.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                     {paq.detalle}
                  </Card.Title>
                  <Card.Text>
                  {paq.descripcion}
                    <h6>{paq.duracion} Dias</h6>
                  </Card.Text>
                  <Button onClick={() =>{ navigate(`/detalles/${paq.idpaquete}`) }} variant="warning">Reservar Ahora
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                    </svg>
                  </Button>
                </Card.Body>
              </Card>

              ))}
            </Col>
          </Row>
          <hr></hr>
          <Row className="boletin">
            <Col>
              <h1>
                Boletin Informativo
              </h1>
              <h6>
                Regístrate para recibir las mejores ofertas
              </h6>
            </Col>
            <Col>
            <InputGroup hasValidation>
              <InputGroup.Text>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                </svg>
              </InputGroup.Text>
              <Form.Control type="email" required isInvalid />
              <Form.Control.Feedback type="invalid">
                Favor Ingresar Correo Electronico
              </Form.Control.Feedback>
            </InputGroup>
            </Col>
          </Row>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
