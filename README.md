### 원티드 프리온보딩 챌린지 10월 (CSR / SSR with Next.js)

#### Assignment) 개인 블로그에 아래 질문에 대한 포스팅을 하고 링크를 제출해주세요.

-   1. CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명해주세요.

    -   CSR은 웹 페이지의 렌더링이 클라이언트 단에서 일어나는 렌더링 방식입니다.

        -   장점

            -   페이지 전환 속도가 빠르고 서버에 부담이 적습니다.
                -   가상 DOM을 사용하여, 변경된 부분만 동적으로 렌더링 합니다.
                -   데이터 요청이 있을 때만 서버에 요청하므로, 서버에 부담이 적습니다.

        -   단점
            -   초기 페이지 렌더링 속도가 느립니다. (초기에 서버에서 정적 리소스를 받아서 렌더링)
            -   SEO(검색엔진 최적화)가 어렵습니다.
                -   CSR 방식은 클라이언트 측에서 페이지를 구성하기 전까지는 HTML이 빈 페이지 상태입니다. 검색 엔진 봇이 HTML에서 콘텐츠를 수집(크롤링) 할 때, 빈 페이지 상태이기 때문에 검색 엔진에 수집이 되지 않으며 구글, 네이버 등 검색 엔진에 노출이 어렵습니다.
                    -   CSR 방식은 가상 DOM을 이용하여 Javascript를 실행해서 View를 만듭니다. 검색 엔진 봇은 JS 파일을 읽지 못합니다

-   2. SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.

    -   SPA은 대부분 CSR으로 구성되어 있고, CSR 방식은 SEO(검색엔진 최적화)에 취약하다는 단점이 있습니다. 검색 엔진 최적화를 하기 위해 SSR이 중요한 역할을 합니다. SSR 방식은 서버단에서 페이지를 렌더링해서 보내기 때문에, 검색 엔진 봇이 콘텐츠를 수집할 때, 이미 콘텐츠가 들어간 상태로 데이터 수집이 잘 됩니다.

-   3. Next.js 프로젝트를 세팅한 뒤 yarn start 스크립트를 실행했을 때 실행되는 코드를 nextjs github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.

    -   [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started) (Next.js 세팅 가이드)
    -   [https://github.com/vercel/next.js/](https://github.com/vercel/next.js/) (Next.js Github 레포지토리)

        -   Next.js 에서 `yarn start` 스크립트를 실행했을 때 실행되는 파일에 대한 간단한 설명

            -   `yarn`은 패키지 매니저 툴입니다.
            -   Next.js 에서 `yarn start` 스크립트를 실행했을 때 -> `package.json` 파일을 통해서 스크립트를 실행합니다.

            ```json
            // package.json
            "scripts": {
                "dev": "next dev",
                "build": "next build",
                "start": "next start",
                "lint": "next lint"
            }
            ```

            -   `start` : Next.js 프로덕션 서버를 시작하기 위해 다음 시작을 실행합니다.

            -   Next.js Github에 들어가면 `next-start.ts` 파일에서 실행하는 코드를 볼 수 있습니다.
                -   https://github.com/vercel/next.js/blob/canary/packages/next/cli/next-start.ts

            ```ts
            // next-start.ts
            #!/usr/bin/env node

            import arg from 'next/dist/compiled/arg/index.js'
            import { startServer } from '../server/lib/start-server'
            import { getPort, printAndExit } from '../server/lib/utils'
            import * as Log from '../build/output/log'
            import isError from '../lib/is-error'
            import { getProjectDir } from '../lib/get-project-dir'
            import { cliCommand } from '../lib/commands'

            const nextStart: cliCommand = (argv) => {

              // command 옵션
              const validArgs: arg.Spec = {
                  // Types
                  '--help': Boolean,
                  '--port': Number,
                  '--hostname': String,
                  '--keepAliveTimeout': Number,

                  // Aliases
                  '-h': '--help',
                  '-p': '--port',
                  '-H': '--hostname',
              }
              let args: arg.Result<arg.Spec>
              try {
                  args = arg(validArgs, { argv })
              } catch (error) {
                  if (isError(error) && error.code === 'ARG_UNKNOWN_OPTION') {
                  return printAndExit(error.message, 1)
                  }
                  throw error
              }

              // command 옵션 가이드
              if (args['--help']) {
                  console.log(`
                  Description
                      Starts the application in production mode.
                      The application should be compiled with \`next build\` first.
                  Usage
                      $ next start <dir> -p <port>
                  <dir> represents the directory of the Next.js application.
                  If no directory is provided, the current directory will be used.
                  Options
                      --port, -p      A port number on which to start the application
                      --hostname, -H  Hostname on which to start the application (default: 0.0.0.0)
                      --keepAliveTimeout  Max milliseconds to wait before closing inactive connections
                      --help, -h      Displays this message
                  `)
                  process.exit(0)
              }

              const dir = getProjectDir(args._[0])
              const host = args['--hostname'] || '0.0.0.0'
              const port = getPort(args)

              const keepAliveTimeoutArg: number | undefined = args['--keepAliveTimeout']
              if (
                  typeof keepAliveTimeoutArg !== 'undefined' &&
                  (Number.isNaN(keepAliveTimeoutArg) ||
                  !Number.isFinite(keepAliveTimeoutArg) ||
                  keepAliveTimeoutArg < 0)
              ) {
                  printAndExit(
                  `Invalid --keepAliveTimeout, expected a non negative number but received "${keepAliveTimeoutArg}"`,
                  1
                  )
              }

              // timeout 제한 시간
              const keepAliveTimeout = keepAliveTimeoutArg
                  ? Math.ceil(keepAliveTimeoutArg)
                  : undefined

              // startServer 모듈 불러와서, 서버 실행
              startServer({
                  dir,
                  hostname: host,
                  port,
                  keepAliveTimeout,
              })
                  .then(async (app) => {
                  const appUrl = `http://${app.hostname}:${app.port}`
                  Log.ready(`started server on ${host}:${app.port}, url: ${appUrl}`)
                  await app.prepare()
                  })
                  .catch((err) => {
                  console.error(err)
                  process.exit(1)
                  })
            }

            export { nextStart }
            ```

#### 과제 제출

-   수행하신 과제는 챌린지 시작 후 전달될 안내에 따라 링크로 제출해주시고, 학습 수준 파악 및 강의 진행을 위해 사용될 예정입니다.
