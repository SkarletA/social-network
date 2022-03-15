export function home() {
  const homeContent = `
    <section class="container-home">
      <aside class="profile-home"></aside>
      <section class="posts-home">
        <form class="form-home" id="formHome" method="post">
          <textarea name="description-posts" class="description-Posts" id="descriptionPosts"
          cols="4" placeholder="¿Sobre que quieres hablar?"></textarea>
          <button type="submit" class="btn-post" id="btnPost">Publicar</button>
        </form>
        <section class="post-container" id="postContainer">
        </section>
      </section>
      <aside class="hash-home">

      </aside>
    </section>
  `;
  return homeContent;
}
