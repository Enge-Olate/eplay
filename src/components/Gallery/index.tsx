import { Container } from "../../globalStyle";
import { useState } from "react";
import zoom from "../../assets/images/zoom.png";
import play from "../../assets/images/play.png";
import fechar from "../../assets/images/fechar.png";
import { Items, Item, Action, Modal, ModalContent } from "./style";
import Section from "../Section";
import type { GalleryItem } from "../../types";

type Props = {
  defaultCover: string;
  name: string;
  items: GalleryItem[];
};
interface ModalState extends GalleryItem {
  isVisible: boolean;
}
export default function Gallery({ defaultCover, name, items }: Props) {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url: "",
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "video") return play;
    return zoom;
  };
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: "image",
      url: "",
    });
  };
  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {items.map((media, index) => {
            return (
              <Item
                key={media.url}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    type: media.type,
                    url: media.url,
                  });
                }}
              >
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
        <Modal className={modal.isVisible ? "visible" : ""}>
          <ModalContent>
            <header>
              <h4>{name}</h4>
              <img src={fechar} alt="Fechar" onClick={() => closeModal()} />
            </header>
            {modal.type === "image" ? (
              <img src={modal.url} />
            ) : (
              <iframe src={modal.url} title="video" />
            )}
          </ModalContent>
          <div
            onClick={() => {
              closeModal();
            }}
            className="overlay"
          ></div>
        </Modal>
      </Container>
    </>
  );
}
