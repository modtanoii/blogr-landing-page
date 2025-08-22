import React from "react";

const Section = () => {
  return (
    <section className="flex flex-col font-overpass mt-25 md:flex-row md:mt-15">
      <h3 className="text-[27px] md:text-[38px] md:font-bold md:absolute">Designed for the future</h3>
      <div className='my-13'>
        <img
          className='scale-108'
          src="/src/assets/images/illustration-editor-desktop.svg"
          srcset="/src/assets/images/illustration-editor-mobile.svg 375w,
          /src/assets/images/illustration-editor-desktop.svg 1440W"
          sizes="(max-width: 375px) 100vw, 1200px"
          alt="editor"
        />
        <div className='mt-15'>
          <h3 className="text-[27px] text-center leading-8">
            Introducing an
            <br />
            extensible editor
          </h3>
          <p className="px-10 mt-3.5 text-center leading-7">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3 className="text-[27px] text-center mt-10 leading-8.5">
            Robust content
            <br />
            management
          </h3>
          <p className="px-10 mt-6 text-center leading-7">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
