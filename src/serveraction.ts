"use server";

export async function fetchTest() {
  return fetch("http://localhost:3000/api/test", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
}
