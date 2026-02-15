import zelda from "../../assets/zelda.png";
import residente from "../../assets/resident.png";
import zoom from "../../assets/images/zoom.png";
import play from "../../assets/images/play.png";

import { Items, Item, Action } from "./style";
type GalleryItem = {
  type: "image" | "video";
  url: string;
};
const mock: GalleryItem[] = [
  {
    type: "image",
    url: zelda,
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
export default function Gallery({ defaultCover, name }: Props) {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "video") return play;
    return zoom;
  };
  return (
    <>
      <Items>
        {mock.map((media, index) => {
          return (
            <Item key={media.url}>
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
    </>
  );
}
