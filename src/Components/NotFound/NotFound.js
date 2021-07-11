const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      {<h2 className="farsiest">این صفحه وجود ندارد!</h2>}
      {<h2 className="farsiest">از منوی بالا برای حرکت استفاده کنید.</h2>}
      {/* {false && <h2 className="farsiest">درست اومدی؟🙄</h2>} */}
      {/* <h2 className=" farsiest">آدرس کجا رو بهت دادن؟🤔</h2> */}
      {/* <h2 className=" farsiest">
        اینجا پلاک{" "}
        <span
          style={{
            color: "gold",
            textDecoration: "underline",
            fontStyle: "italic",
          }}
        >
          404
        </span>{" "}
        ـه! ✋
        </h2> */}
    </div>
  );
};

export default NotFound;
