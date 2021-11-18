import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

export function Company() {
  return (
    <section>
      <h2>Our Company</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, odio
        vel recusandae eaque hic quaerat. Beatae consequuntur, sint repellendus
        id deleniti rerum enim dolore quod accusamus unde excepturi recusandae
        exercitationem cumque praesentium modi, sapiente nulla est tenetur
        placeat nihil. Dolore deleniti nihil laboriosam sequi atque perspiciatis
        eligendi odio recusandae illum.
      </p>
    </section>
  );
}

export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea eos
        nulla magnam atque? Pariatur officiis voluptas, reprehenderit
        praesentium magni accusantium asperiores nemo cumque dignissimos
        corrupti quibusdam sequi labore provident quia nihil dolores.
        Exercitationem quo assumenda repellendus vitae voluptatibus beatae. Est
        voluptatibus saepe autem sit fugit nihil quos! Adipisci, quia.
      </p>
    </section>
  );
}

export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error odit
        voluptas nobis incidunt perferendis temporibus architecto nam quidem est
        eaque dignissimos unde deserunt, amet debitis voluptate necessitatibus
        eligendi! Rerum aspernatur soluta eveniet! Sapiente reiciendis neque
        aliquid inventore obcaecati illum sint illo repudiandae. Similique
        doloremque voluptate accusamus quis asperiores vel libero facilis ipsa
        nobis, soluta temporibus error nesciunt, expedita accusantium veniam
        quod deserunt? Consequuntur, hic ab illo architecto quae numquam
        laudantium eum sit fuga voluptates sed cumque, temporibus possimus
        voluptatum excepturi.
      </p>
    </section>
  );
}

export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aliquid
        magni, adipisci omnis non ipsa ad placeat atque amet eum veniam! Ipsa
        itaque soluta magni ratione temporibus veritatis possimus, quisquam
        minus in ducimus earum laudantium. Repellendus quisquam quae nihil ab
        modi laborum eos, animi sint magnam libero maiores. Explicabo
        consequuntur eius voluptas aliquid eaque perferendis asperiores tempora
        officiis porro distinctio. Dicta, deserunt laborum nostrum dolores
        eligendi facere minus voluptatum possimus.
      </p>
    </section>
  );
}
