/**
 * 
 * Api desatualizada
 * @deprecated
 */

 export async function getCertifications() {
  try {
    const data = await fetch(
      `https://www.alura.com.br/api/dashboard/${process.env.NEXT_PUBLIC_ALURA_KEY}`
    )
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        return data;
      });

    return data;
  } catch (err) {
    console.log(err);
  }
}
