import React from "react";
import ReactPlayer from "react-player";
import { Drawer } from "antd";
import style from "./VideoDrawer.module.css";

interface Props {
  url: string;
  title: string;
  openDrawer: boolean;
  isMobile?: boolean | false;
  isClosable?: boolean | false;
  onClose: () => void;
}

const VideoDrawer = (props: Props) => {
  const { url, title, openDrawer, isMobile, isClosable, onClose } = props;
  return (
    <Drawer
      title={title}
      placement="right"
      closable={isClosable}
      onClose={onClose}
      visible={openDrawer}
      width={isMobile ? "100%" : "60%"}
      drawerStyle={{ backgroundColor: "black", zIndex: 2000 }}
      className={style.bumpZIndex}
      destroyOnClose
      closeIcon={<div style={{color: 'white'}}>Close video</div>}
    >
      <ReactPlayer url={url} stopOnUnmount playing width="100%" pip />
    </Drawer>
  );
};
export default VideoDrawer;
