(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{369:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h3",{attrs:{id:"nhost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nhost"}},[t._v("#")]),t._v(" Nhost")]),t._v(" "),a("p",[t._v("The easiest way to deploy HBP is with the official "),a("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nhost"),a("OutboundLink")],1),t._v(" managed service. Get your perfect configured backend with PostgreSQL, Hasura and Hasura Backend Plus and save yourself hours of maintenance per month.")]),t._v(" "),a("p",[t._v("All "),a("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nhost"),a("OutboundLink")],1),t._v(" projects are built on open source software so you can make realtime web and mobile apps fast 🚀.")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://nhost.io/register",target:"_blank"}},[a("img",{attrs:{src:"https://github.com/nhost/hasura-backend-plus/raw/master/docs/.vuepress/public/nhost-register-button.png",width:"200px"}})])]),t._v(" "),a("h3",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" Docker-Compose")]),t._v(" "),a("p",[t._v("Create the following "),a("code",[t._v("docker-compose.yaml")]),t._v(" file, and modify the Hasura Admin Secret in both "),a("code",[t._v("graphql-engine")]),t._v(" and "),a("code",[t._v("hasura-backend-plus")]),t._v(" services.")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.6'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postgres")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("POSTGRES_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgrespassword\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" db_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/postgresql/data\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("graphql-engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hasura/graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1.2.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080:8080'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_DATABASE_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgrespassword@postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5432/postgres\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_JWT_SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"type": "RS256", "jwk_url": "http://hasura-backend-plus:3000/auth/jwks"}\'')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_ENABLE_CONSOLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hasura-backend-plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nhost/hasura"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3000:3000'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SERVER_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080/v1/graphql\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("JWT_ALGORITHM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RS256\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("S3_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//minio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("S3_BUCKET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hasura"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plus\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("S3_ACCESS_KEY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio_access_key\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("S3_SECRET_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${S3_SECRET_ACCESS_KEY:?S3_SECRET_ACCESS_KEY}'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("AUTO_MIGRATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio/minio\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("S3_BUCKET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hasura"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plus\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minio_access_key\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MINIO_SECRET_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${S3_SECRET_ACCESS_KEY:?S3_SECRET_ACCESS_KEY}'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## min 8 character")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("entrypoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sh\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"-c 'mkdir -p /export/hasura-backend-plus && /usr/bin/minio server /export'\"")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minio_data:/data'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minio_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br")])]),a("p",[t._v("Then start the services:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HASURA_GRAPHQL_ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your Hasura Admin secret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("S3_SECRET_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your Minio access key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ndocker-compose up -d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Everything should be up and running. HBP is listening to "),a("code",[t._v("http://localhost:3000")]),t._v(", Hasura Graphql Engine is listening to "),a("code",[t._v("http://localhost:8080")]),t._v(".")]),t._v(" "),a("p",[t._v("You can then run the Hasura Console in following the "),a("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/hasura-cli/hasura_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official instructions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"standalone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone"}},[t._v("#")]),t._v(" Standalone")]),t._v(" "),a("p",[t._v("You can also install HBP without any other service, and connect it to an existing Hasura server, and/or an S3 instance if you plan to use the storage features.\nThe easiest way is to pull and run a Docker container, but you can also run the service from the source code.")]),t._v(" "),a("p",[t._v("You will also need to make sure the HBP migrations and metadata are loaded in your Hasura instance, either in using the "),a("code",[t._v("AUTO_MIGRATE=true")]),t._v(" environment variable, or in loading the migrations manually. Please see the "),a("RouterLink",{attrs:{to:"/configuration.html#migrations"}},[t._v("related configuration chapter")]),t._v(" for further details.")],1),t._v(" "),a("h4",{attrs:{id:"using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[t._v("#")]),t._v(" Using Docker")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(":3000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HASURA_ENDPOINT=<your Hasura graphql endpoint>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HASURA_GRAPHQL_ADMIN_SECRET=<your Hasura admin secret>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT_KEY=<your JWT RSA256 key>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  nhost/hasura-backend-plus:latest\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),t._v(" "),a("h4",{attrs:{id:"from-the-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-the-source-code"}},[t._v("#")]),t._v(" From the source code")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nhost/hasura-backend-plus.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" hasura-backend-plus\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" .env.example .env\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" start\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),a("p",[t._v("By default, anyone can register with an email address and a password:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST http://localhost:3000/auth/register`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("You can add some safeguards and limitations to the registration process like email verification, constraints on emails and passwords, or setting additional registration fields from your custom database schema. More information is available in the "),a("RouterLink",{attrs:{to:"/configuration.html#registration"}},[t._v("registration configuration chapter")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[t._v("#")]),t._v(" Login")]),t._v(" "),a("p",[t._v("Once an user is registered, they can connect to HBP with the "),a("code",[t._v("/auth/login")]),t._v(" endpoint:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST http://localhost:3000/auth/login`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("It will return the following payload:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the user Hasura-compatible JWT>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the number of milliseconds of validity of the JWT>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("You'll find more details about how HBP handles the session and JWT in the "),a("a",{attrs:{href:"#jwt"}},[t._v("JWT section")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"multi-factor-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication"}},[t._v("#")]),t._v(" Multi-Factor Authentication")]),t._v(" "),a("p",[t._v("By default, any authenticted user can decide to add "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOTP"),a("OutboundLink")],1),t._v(" multi-factor authentication (MFA). It will require the user to get a generator such as "),a("a",{attrs:{href:"https://authy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authy"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Authenticator"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"generate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[t._v("#")]),t._v(" Generate")]),t._v(" "),a("p",[t._v("The first step to activate MFA is to generate a secret through the "),a("code",[t._v("/auth/mfa/generate")]),t._v(" POST endpoint:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST http://localhost:3000/auth/mfa/generate`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("It will return the following payload:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"otp_secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the otp secret>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the base64-encoded QR Code png image>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("The client now goes to its favorite MFA app (e.g. Google Authenticator) and enters its secret either manually or in using the QR-code generated by the server.")]),t._v(" "),a("h3",{attrs:{id:"enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[t._v("#")]),t._v(" Enable")]),t._v(" "),a("p",[t._v("Once the user fetched their OTP secret, they must generate a verification code and send it to HBP to complete the activation or MFA. The code is send to the "),a("code",[t._v("/auth/mfa/enable")]),t._v(" POST endpoint:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"code":"<verification-code>"}\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST http://localhost:3000/auth/mfa/enable`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("The server should return a "),a("code",[t._v("204")]),t._v(" HTTP code. The user login will now have an additional step as explained in the following section.")]),t._v(" "),a("h3",{attrs:{id:"login-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-2"}},[t._v("#")]),t._v(" Login")]),t._v(" "),a("p",[t._v("When an user enabled MFA, they still send their user/email credentials to "),a("code",[t._v("/auth/login")]),t._v(", but the payload will now become:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mfa"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<an automatically one-time only generated ticket>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("The next step to finish the authentication is to send back the ticket with the verification code from your favorite MFA app to "),a("code",[t._v("/auth/mfa/totp")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"ticket":"<generated-ticket>", code":"<verification-code>"}\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST http://localhost:3000/auth/mfa/totp`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("The HBP session is then opened with the client, and the JWT is sent back as the payload:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the user Hasura-compatible JWT>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the number of milliseconds of validity of the JWT>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"disable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[t._v("#")]),t._v(" Disable")]),t._v(" "),a("h2",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),a("p",[t._v("When the user logs in, HBP sets an HTTP-Only cookie to store session information and a refresh token.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Never store a JWT in the local storage of the browser as it is prone to XSS attacks! Keep a short expiration period instead, and get a refreshed JWT through HBP.")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("jwt_expires_in")]),t._v(" indicates the maximum frequency in which the browser will need to refresh the JWT.")]),t._v(" "),a("p",[t._v("You can get a refreshed JWT throught the "),a("code",[t._v("/auth/token/refresh")]),t._v(" GET endpoint:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" http://localhost:3000/auth/token/refresh`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("It will return the same kind of payload as in "),a("code",[t._v("/auth/login")]),t._v(", with a new JWT:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the user Hasura-compatible JWT>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<the number of milliseconds of validity of the JWT>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"enable-an-oauth-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-an-oauth-provider"}},[t._v("#")]),t._v(" Enable an OAuth provider")]),t._v(" "),a("h3",{attrs:{id:"backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backend"}},[t._v("#")]),t._v(" Backend")]),t._v(" "),a("p",[t._v("Set the necessary environment variables on "),a("code",[t._v("docker-compose.yaml")]),t._v(" under the "),a("code",[t._v("hasura-backend-plus")]),t._v(" section. The OAuth Providers section from "),a("code",[t._v(".env.example")]),t._v(" has a list of the supported providers and options. Make sure to set also the "),a("code",[t._v("PROVIDER_SUCCESS_REDIRECT")]),t._v(" and "),a("code",[t._v("PROVIDER_FAILURE_REDIRECT")]),t._v(" URLs to the frontend.")]),t._v(" "),a("h3",{attrs:{id:"frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontend"}},[t._v("#")]),t._v(" Frontend")]),t._v(" "),a("p",[t._v("For OAuth login, redirect the user to "),a("code",[t._v("//hasura-backend-plus/auth/providers/{provider}")]),t._v(" to perform the authentication. Upon success, the URL set in "),a("code",[t._v("PROVIDER_SUCCESS_REDIRECT")]),t._v(" will be called back, with a "),a("code",[t._v("refresh_token")]),t._v(" query parameter. Use this value to perform a GET on "),a("code",[t._v("//hasura-backend-plus/auth/token/refresh?refresh_token={refresh_token}")]),t._v(" to obtain the response which contains the valid JWT.")]),t._v(" "),a("h2",{attrs:{id:"change-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-email"}},[t._v("#")]),t._v(" Change email")]),t._v(" "),a("h2",{attrs:{id:"reset-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-password"}},[t._v("#")]),t._v(" Reset password")]),t._v(" "),a("h2",{attrs:{id:"unregister"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unregister"}},[t._v("#")]),t._v(" Unregister")]),t._v(" "),a("h2",{attrs:{id:"logout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logout"}},[t._v("#")]),t._v(" Logout")])])}),[],!1,null,null,null);s.default=n.exports}}]);