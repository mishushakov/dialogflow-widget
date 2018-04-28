<template>
<div>
    <header class="mdc-toolbar">
        <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                <a class="material-icons mdc-toolbar__icon--menu">chat_bubble_outline</a>
                <span class="mdc-toolbar__title">Dialogflow Web Widget</span>
            </section>
        </div>
    </header>
    <main class="container">
        <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell--span-6">
                    <h1 class="dftext">You use Dialogflow and want more?</h1>
                    <h1 class="mdc-typography--subheading2">Then you are on the right page. Dialogflow Widget for Web enables you ultimate google assistant experience with its look and feel just in seconds! And guess what? It's free!</h1>

                    <br>
                    <br>

                    <div class="mdc-textfield">
                        <i class="material-icons tokenicon">vpn_key</i>
                        <input type="password" class="mdc-textfield__input token" v-model="token" placeholder="Enter your token here"/>
                        <div class="mdc-text-field__bottom-line"></div>
                        
                        <br>

                        <div class="mdc-switch">
                            <input type="checkbox" v-model="mute" class="mdc-switch__native-control" role="switch">
                            <div class="mdc-switch__background">
                                <div class="mdc-switch__knob"></div>
                            </div>
                        </div>
                        <label for="basic-switch">Mute Audio by default</label>

                        <br>
                        <br>

                        <div class="mdc-switch">
                            <input type="checkbox" v-model="bottom" class="mdc-switch__native-control" role="switch">
                            <div class="mdc-switch__background">
                                <div class="mdc-switch__knob"></div>
                            </div>
                        </div>
                        <label for="basic-switch">Display input at the bottom</label>
                    </div>

                    <pre class="copypaste">
&lt;iframe
    width="350"
    height="430"
    src="https://mish.io/dialogflow-widget/#/{{token}}?mute={{mute}}&bottom={{bottom}}" /&gt;</pre>

                    <p class="mdc-text-field-helptext" aria-hidden="true">
                        Your token will not be saved anywhere. You can get it in <a class="flow" href="https://console.dialogflow.com">Dialogflow Dashboard</a>
                    </p>

                    <button @click="copy()" class="mdc-button mdc-ripple-upgraded--background-active-fill">
                        Copy
                    </button>
                    <a class="mdc-button mdc-button--raised" href="https://github.com/MishUshakov/dialogflow-widget">
                        GitHub
                    </a>

                </div>
                <div class="mdc-layout-grid__cell--span-4">
                    <h1 class="dftext preview">Preview</h1>
                    <iframe
                        class="widgetframe"
                        :src="'https://mish.io/dialogflow-widget/#/' + token + '?mute=' + mute + '&bottom=' + bottom" /> <!-- Replace my token with yours after #/ -->
                </div>
            </div>
        </div>
    </main>

</div>
</template>

<style lang="sass">
\:root
    --mdc-theme-primary: #2b303e

body
    margin: 0
    background-color: #F5F5F5
    font-family: 'Roboto', sans-serif

.mdc-toolbar
    background-color: transparent

.mdc-toolbar *
    color: #2b303e

.container
    max-width: 1200px
    margin-left: auto
    margin-right: auto
    padding: 1rem

.dftext
    font-size: 48px
    line-height: 60px
    color: #757575
    font-weight: 300

.dftext.preview
    @media screen and (min-width: 840px)
        display: none

.mdc-textfield
    width: 92%

i.tokenicon
    position: absolute

.token
    margin-left: 40px

.widgetframe
    margin-left: 120px
    width: 400px
    height: 600px
    box-shadow: 0 19px 147px -41px rgba(0, 0, 0, .75)
    border: 6px solid #f5f5f5
    border-radius: 6px


    @media screen and (max-width: 1200px)
        width: 100%
        margin-left: 0px

.copypaste
    background-color: white
    border-radius: 6px
    padding: 15px
    overflow: scroll
    border: 3px solid rgba(0,0,0,.1)

.flow
    color: #ef6c00
    text-decoration: none
</style>


<script>
export default {
    name: 'landing',
    data: function(){
        return {
            token: '9d686a47b1de48bab431e94750d1cd87',
            mute: false,
            bottom: false
        }
    },
    methods: {
        copy(){
            alert("Oh, you are really too lazy to press CTRL + C?")
        }
    }
}
</script>