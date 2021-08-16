<template>
  <div class="py-20 px-32">
    <div class="max-w-prose m-auto">
      <div class="mb-8">
        <a
          href="https://www.twitter.com/arpowers"
          class="italic text-2xl text-primary-500 hover:text-orange-600"
          >@arpowers</a
        >
        <h1 class="text-5xl">Andrew Powers</h1>
      </div>
      <div class="text-xl leading-relaxed space-y-4">
        <p>
          Get my newsletter. It features long-form essays on data-driven
          marketing, growth hacking, metrics, and network effects. I plan on
          writing essays every week, and delivering as many insights as I
          possibly can.
        </p>
        <p>
          These days, I’m the founder and CEO of
          <a
            class="text-primary-500 hover:text-orange-600"
            href="https://www.darwin.so"
            >Darwin</a
          >, where I focus on building the future of data, analytics, and
          marketing tools. I also do occasional investing and micro
          acquisitions. Previously, I built and sold a web tools and frameworks
          business which I bootstrapped to 72,000 customers. I’ll share from
          these experiences, and more, on my newsletter.
        </p>
      </div>
      <div>
        <form class="mt-8 sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="
              w-full
              px-5
              py-3
              placeholder-gray-500
              focus:ring-primary-500 focus:border-primary-500
              sm:max-w-xs
              border-bluegray-400
              rounded-md
              font-sans
            "
            placeholder="email@work.com"
          />
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="
                w-full
                flex
                items-center
                justify-center
                px-5
                py-3
                border border-transparent
                text-base
                rounded-md
                text-primary-100
                bg-primary-500
                hover:bg-primary-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-500
                font-sans
              "
            >
              Sign Up &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
