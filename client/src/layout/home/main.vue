<template>
  <div class="container is-max-widescreen">
    <div class="tile is-ancestor">
      <div class="tile is-horizontal is-12">
        <div class="tile">
          <div class="tile is-parent">
            <div class="card">
              <div class="card-content">
                <p class="title">
                  “There are two hard things in computer science: cache
                  invalidation, naming things, and off-by-one errors.”
                </p>
                <p class="subtitle">Jeff Atwood</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on
                    <a
                      href="https://twitter.com/codinghorror/status/506010907021828096"
                      >Twitter</a
                    >
                  </span>
                </p>
                <p class="card-footer-item">
                  <span> Share on <a href="#">Facebook</a> </span>
                </p>
              </footer>
            </div>
          </div>
          <div class="tile is-parent is-horizontal is-4">
           <div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
					<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">John Smith</p>
					<p class="subtitle is-6">@johnsmith</p>
				</div>
				</div>

				<div class="content">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus nec iaculis mauris. <a>@bulmaio</a>.
				<a href="#">#css</a> <a href="#">#responsive</a>
				<br>
				<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
			</div>
			</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  components: {
  },
};
</script>

<style lang="scss" scoped>
.tab-wrapper{
	width: 100%;
	height: 3rem;
}
</style>
