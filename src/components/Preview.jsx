import React from 'react';
import { MdClose } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';

const Preview = ({ view, item, onClose }) => {
  if (!view || !item) {
    return null;
  }

  const thumb = item.volumeInfo?.imageLinks?.smallThumbnail;
  const authors = item.volumeInfo?.authors || 'Author Not Available';
  const publisher = item.volumeInfo?.publisher || 'Publisher Not Available';
  const publishedDate = item.volumeInfo?.publishedDate || 'Date Not Available';
  const description = item.volumeInfo?.description || 'Description Not Available';
  const previewLink = item.volumeInfo?.previewLink || '#';

  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="preview">
      <div className="inside">
        <button className="close" onClick={handleClose}>
          <MdClose />
        </button>
        <div className="box">
          <img src={thumb} alt="Book thumbnail" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>{authors}</h3>
            <h4>
              {publisher}
              <span>{publishedDate}</span>
            </h4>
            <a href={previewLink} target='blank'>
              <button>
                <CiCircleMore />
              </button>
            </a>
          </div>
        </div>
        <h4 className="desc">{description}</h4>
      </div>
    </div>
  );
};

export default Preview;
