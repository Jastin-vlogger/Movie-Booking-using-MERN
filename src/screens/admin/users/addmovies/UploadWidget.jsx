import { useEffect, useRef } from 'react';

const UploadWidget = ({ children, onUpload }) => {
  const cloudinary = useRef();
  const widget = useRef();

  // Store the Cloudinary window instance to a ref when the page renders

  useEffect(() => {
    cloudinary.current = window.cloudinary;
  }, []);

  /**
   * createWidget
   * @description Creates a new instance of the Cloudinary widget and stores in a ref
   */

  function createWidget() {
    const options = {
        cloudName:'dz9pirkca',
        uploadPreset:'at0fzbqj',
        cropping:true
    }

    return cloudinary.current?.createUploadWidget(options,
      function (error, result) {
        // The callback is a bit more chatty than failed or success so
        // only trigger when one of those are the case. You can additionally
        // create a separate handler such as onEvent and trigger it on
        // ever occurance
        if ( error || result.event === 'success' ) {
          onUpload(error, result, widget?.current);
        }
      }
    );
  }

  /**
   * open
   * @description When triggered, uses the current widget instance to open the upload modal
   */

  function open() {
    if ( !widget?.current ) {
      widget.current = createWidget();
    }
    widget?.current && widget.current.open();
  }

  return (
    <>
      {children({ cloudinary: cloudinary.current, widget: widget.current, open })}
    </>
  )
}

export default UploadWidget;