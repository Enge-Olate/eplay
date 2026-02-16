import residente from "../../assets/resident.png";
import zoom from "../../assets/images/zoom.png";
import play from "../../assets/images/play.png";
import fechar from "../../assets/images/fechar.png";
import aranha from "../../assets/banner-homem-aranha.png";
import starWars from "../../assets/star_wars.png";

import { Items, Item, Action, Modal, ModalContent } from "./style";
import Section from "../Section";
import { Container } from "../../globalStyle";
import { useState } from "react";
interface GalleryItem  {
  type: "image" | "video";
  url: string;
};
const mock: GalleryItem[] = [
  {
    type: "image",
    url: starWars,
  },
  {
    type:"image",
    url:aranha,
  },
  {
    type: "image",
    url: residente,
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/f8ARKTrkdJc?si=fBsssE-F3Ng4zvfK",
  },
];
type Props = {
  defaultCover: string;
  name: string;
};
interface ModalState extends GalleryItem{
  isVisible: boolean;
}
export default function Gallery({ defaultCover, name }: Props) {

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url:''
  });
  
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "video") return play;
    return zoom;
  };
  const closeModal =()=>{
    setModal({
      isVisible:false,
      type:"image",
      url:''
    })
  };
  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {mock.map((media, index) => {
            return (
              <Item key={media.url} onClick={()=>{
                setModal({
                  isVisible: true,
                  type: media.type,
                  url:media.url,
                })
              }}>
                <img
                  src={getMediaCover(media)}
                  alt={`Midia ${index + 1} do ${name}`}
                />
                <Action>
                  <img
                    src={getMediaIcon(media)}
                    alt="Clique para maximizar a imagem."
                  />
                </Action>
              </Item>
            );
          })}
        </Items>
      </Section>
      <Container style={{ width: "960px" }}>
        <Modal className={modal.isVisible? 'visible':''}>
          <ModalContent>
            <header>
              <h4>{name}</h4>
              <img src={fechar} alt="Fechar" onClick={()=>closeModal()} />
            </header>
            {modal.type === "image"?(
              <img src={modal.url}/>

            ):<iframe src={modal.url} title="video"/>}
          </ModalContent>
          <div onClick={()=>{closeModal()}} className="overlay"></div>
        </Modal>
      </Container>
    </>
  );
}
