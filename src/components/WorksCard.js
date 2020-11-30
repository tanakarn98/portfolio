import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import PropTypes from "prop-types";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const WorksCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="worksCard" onClick={handleOpen}>
        <img
          src={`${props.data.fields.img.fields.file.url}?w=800&h=500`}
          alt=""
        />
        <p className="title">{props.data.fields.title}</p>
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <img
              src={`${props.data.fields.img.fields.file.url}?w=800&h=500`}
              alt=""
            />
            <div>
              <p className="title">{props.data.fields.title}</p>
              <p className="date">{props.data.fields.date}</p>
              <p className="category">
                {props.data.fields.tags
                  ? props.data.fields.tags.map((item, i) => (
                      <span>{item.fields.tag}</span>
                    ))
                  : null}
              </p>
              <p className="text">
                <ReactMarkdown
                  source={props.data.fields.text}
                  escapeHtml={false}
                />
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default WorksCard;
