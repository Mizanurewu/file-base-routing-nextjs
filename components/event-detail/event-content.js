import classes from './event-content.module.css';

function EventContent(props) {
  console.dir(props.children);
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
