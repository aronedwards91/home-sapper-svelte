<script>
  import { ExperienceList } from "../data/career";
</script>

<h2>Software Career</h2>

<ul>
  {#each ExperienceList as item}
    <li class="flex">
      <img class="icon" src={item.icon} alt="company icon" />
      <div class="text-align-left">
        <h4>{item.title}</h4>
        <h5>{item.sub}</h5>
        <p style="white-space: break-spaces;">{item.text}</p>
      </div>
    </li>
  {/each}
</ul>

<h2>Prior Career</h2>
<p>
  Mostly in IT, but tried some odd jobs before I found where my skills best fit
</p>

<style>
  ul {
    list-style: none;
    padding-inline-start: 0;
  }
  li.flex {
    display: flex;
    margin-bottom: 2em;
  }
  img.icon {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    ul {
      list-style: none;
      padding-inline-start: 2em;
    }
    img.icon {
      display: block;
      text-align: center;
      width: 80px;
      height: 80px;
      margin-top: 1em;
      margin-right: 1em;
      border-radius: 50%;
      object-fit: cover;
    }
  }
</style>
