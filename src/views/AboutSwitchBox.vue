<template>
  <div class="about container prose mx-auto pt-8">
    <h2 class="card-title">SwitchBox</h2>
    <p>
      Real-world data (RWD) in healthcare is crucial for generating real-world evidence (RWE) and
      providing insights beyond clinical trial limitations. In the context of multiple sclerosis (MS),
      RWD
      allows valuable insights into this chronic, incurable autoimmune disease of the central nervous
      system.
    </p>
    <p>

      To expand and collaborate with other RWD sources like electronic healthcare records (EHR),
      investigating initiatives for standardising RWD in healthcare is necessary. OHDSI is an
      initiative
      that uses the OMOP common data model to standardise healthcare RWD.
    </p>
    <p>

      The SwitchBox is a tool that automatically transforms source data in a certain format into the
      OMOP
      common data model, lowering the barrier to become part of the OHDSI community and to collaborate
      with data partners from within the MS community and beyond.
    </p>


    <div class="card-actions justify-end">
      <button class="btn btn-sm">
        <RouterLink to="/about">More information</RouterLink>
      </button>
      <RouterLink class="btn btn-info btn-sm float-right mb-4 shadow-sm" to="/create_job">+ New Transformation</RouterLink>
    </div>

  </div>
</template>

<style></style>
