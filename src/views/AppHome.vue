<template>
    <div class="flex flex-wrap p-16">

        <div class="card p-8 max-w-lg mx-auto card-compact card-bordered shadow-lg">
            <div class="card-body">
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
                    <RouterLink class="btn btn-info btn-sm float-right mb-4 shadow-sm" to="/create_job">+ New Transformation</RouterLink>
                    <button class="btn btn-sm">
                        <RouterLink to="/about">More information</RouterLink>
                    </button>
                </div>
            </div>
        </div>
        <div class="card p-8 max-w-lg  mx-auto card-compact card-bordered shadow-lg">
            <div class="card-body">
                <h2 class="card-title">OMOP CDM</h2>
                <p> The Observational Medical Outcomes Partnership (OMOP) Common Data Model (CDM) is an open
                    community
                    data standard, designed to standardize the structure and content of observational data and to
                    enable
                    efficient analyses that can produce reliable evidence.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-sm">
                        <a href="https://ohdsi.github.io/CommonDataModel/" target="_blank">More information</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
