const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

function run () {
    //Input values
    const bucket = core.getInput('bucket', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const distFolder = core.getInput('dist-folder', { required: true })
    core.notice('Hello from Custom JS Action')

    //Upload files
    const s3Uri = `s3://${bucket}`
    AWS_ACCESS_KEY_ID = 
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)
}

run()