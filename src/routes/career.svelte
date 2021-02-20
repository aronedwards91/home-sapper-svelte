<script>
  import { ExperienceList, GeneralExperience } from "../data/career";
</script>

<h2>Software Career</h2>

<ul>
  {#each ExperienceList as item}
    <li class="flex">
      <img class="icon" src={item.icon} alt="company icon" />
      <div class="text-align-left">
        <h4>{item.title}</h4>
        <h5>{item.sub}</h5>
        <p>{item.text}</p>
      </div>
    </li>
  {/each}
</ul>

<h2>Prior Career</h2>

<ul>
  {#each GeneralExperience as item}
    <li class="flex">
      <img class="icon" src={item.icon} alt="company icon" />
      <div class="text-align-left">
        <h4>{item.title}</h4>
        <h5>{item.sub}</h5>
        <p>{item.text}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
  }
  li.flex {
    display: flex;
    margin-bottom: 2em;
  }
  img.icon {
    text-align: center;
    width: 80px;
    height: 80px;
    margin-top: 1em;
    margin-right: 1em;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
