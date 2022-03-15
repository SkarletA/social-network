function profile() {
  const profileContent = `
    <section class="container-profile">
      <aside class="profile">
        <section class="container-profile-users" id="containerProfileUsers"></section>     
          <form id="formProfile" class="form-Profile">
              <input type="file" id="photo-user" name="photo-user"><br>
              <input type="text" id="userProfession" name="user-profession"  class="input" placeholder="Profesion: "><br>
              <input type="text" id="userHobbie" name="user-hobbie"  class="input" placeholder="Gustos: "><br>
              <input input"type="text" id="userAboutMe" name="user-about-me"  class="input" placeholder="Sobre mi: "><br>
              <button type="submit" id="btnUpdateDats" class="btn-updateDats" >Actualizar datos</button>
          </form>
      </aside>
      <section class="posts">
          <h1>Soy un muro</h1>
      </section>
      <aside class="hash"></aside>
    </section>
`;
  return profileContent;
}

export { profile };
