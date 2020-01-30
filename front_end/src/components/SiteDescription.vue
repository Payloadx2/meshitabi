<template>
    <div class="desc-container">
        <h2 class="title"><font-awesome-icon class="pen" icon="pen" />メシタビとは</h2>
        <ol class="desc">
            <li>日本全国のメシから、食べたいものに旗を立てる</li>
            <li>絞り込み機能を使って、メシを厳選する</li>
            <li>上記①②を繰り返して、自分だけのメシタビ計画を立てよう</li>
            <li>TwitterやLineで自分のメシタビ計画を友達とシェアしよう</li>
        </ol>
    </div>
</template>

<style scoped>
    .desc-container {
        padding: 0.4rem;
        border: solid var(--sub-bg-color) 0.2rem;
        border-radius: 0.5rem;
    }

    .title {
        font-size: 1.4rem;
        margin: 0;
    }

    .pen {
        font-size: 1.6rem;
        color:  #5c9ee7;
    }

    ol {
        margin: 0;
        counter-reset:number; /*数字をリセット*/
        list-style-type: none!important; /*数字を一旦消す*/
        padding:0.5rem;
    }
    
    ol li {
        position: relative;
        padding-left: 3rem;
        line-height: 1.5em;
        padding: 0.5rem 0.5rem 0.5rem 3rem;
    }

    ol li:before{
    /* 以下数字をつける */
    position: absolute;
    counter-increment: number;
    content: counter(number);
    /*以下数字のデザイン変える*/
    display:inline-block;
    background: #5c9ee7;
    color: white;
    font-family: 'Avenir','Arial Black','Arial',sans-serif;
    font-weight:bold;
    font-size: 1.4rem;
    border-radius: 50%;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    /*以下 上下中央寄せのため*/
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    }
</style>