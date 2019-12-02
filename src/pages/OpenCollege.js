import React, { Component } from 'react';
import {Container, Row, Col, Jumbotron} from 'reactstrap';
import PythonBook from "../img/python.png";
import WebProgrammingBook from "../img/webprogramming.png";

class OpenCollege extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Jumbotron style={styles.container}>
                    <Container>
                        <h1 className="text-white">OpenCollege - Python Programming Group</h1>
                        <p className="text-white">[Season #1] From Python Programming To Web Programming</p>
                    </Container>
                </Jumbotron>
                <Container>
                </Container>
                <Container>
                    <Row style={{ marginTop : 29}}>
                        <Col>
                            <h1 className="display-5">Introduction</h1>
                            <p>- 지난 시즌 프로젝트에서는 Python의 기초를 배웠고 간단한 LINE 메신저 Bot을 만들어보았습니다.</p>
                            <p>- 이번 시즌에서는 다시 Python 기초부터 공부하고, Flask/HTML/CSS를 이용하여 간단한 Web Programming을 해볼 예정입니다.</p>
                            <p>- 일시 : 격주 금요일 18시 15분 ~ 21시 or 22시</p>
                            <p>- 준비물 : 개인 노트북 (Windows 혹은 Mac 모두 가능)</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 30, marginBottom : 30}}>
                        <Col>
                            <h1 className="display-5">Book</h1>
                            <p>- 다음 책들을 참고서로 이용합니다.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={PythonBook} width="127" className="float-left mr-3 img-fluid img-profile d-inline-block"/>
                            <img src={WebProgrammingBook} width="127" className="float-left mr-3 img-fluid img-profile d-inline-block"/>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 30, marginBottom : 30}}>
                        <Col>
                            <h1 className="display-5">Website</h1>
                            <p>- <a href="https://wikidocs.net/book/1">점프투파이썬을 보충 교재로 합니다.</a></p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 30, marginBottom : 30}}>
                        <Col>
                            <h1 className="display-5">TA</h1>
                            <p>- <a href="https://mossol.slack.com/">Slack#Mossol</a> Slack을 통하여 질문을 받습니다.</p>
                            <p>- 채널은 #opencollege 입니다.</p>
                            <p>- <a href="https://slack.com/intl/en-kr/downloads/windows">Slack 다운로드</a></p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 50}}>
                        <Col>
                            <h1 className="display-5">Program Installation</h1>
                            <p>다음 프로그램들을 순서대로 설치방법을 참고하여 설치합니다.</p>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Program</th>
                                    <th scope="col">Download</th>
                                    <th scope="col">설치방법</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">0</th>
                                    <td>Python3</td>
                                    <td><a href="https://www.python.org/ftp/python/2.7.4/python-3.7.4-amd64.exe">Download</a></td>
                                    <td><a href="https://zetawiki.com/wiki/%EC%9C%88%EB%8F%84%EC%9A%B0_Python_3_%EC%84%A4%EC%B9%98">설치방법</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>PyCharm Community Version</td>
                                    <td><a href="https://www.jetbrains.com/pycharm/download/#section=windows">Download</a></td>
                                    <td><a href="https://wikidocs.net/20343">설치방법</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Git</td>
                                    <td><a href="https://git-scm.com/downloads">Download</a></td>
                                    <td><a href="https://coding-factory.tistory.com/245">설치방법</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Postman</td>
                                    <td><a href="https://www.getpostman.com/downloads/">Download</a></td>
                                    <td>-</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 29, marginBottom: 30}}>
                        <Col>
                            <h1 className="display-5">Sign up</h1>
                            <p>다음 사이트들에 회원가입을 합니다. 암호는 잊어버리지 않기!</p>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Program</th>
                                    <th scope="col">Download</th>
                                    <th scope="col">설치방법</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">0</th>
                                    <td>Github</td>
                                    <td><a href="https://github.com">Go</a></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 29, marginBottom: 30}}>
                        <Col>
                            <h1 className="display-5">Season #1. - Session</h1>
                            <p>이번 시즌 세션 자료들입니다.</p>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Session</th>
                                    <th scope="col">Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">0</th>
                                    <td><a href="https://mossol.net/season1/session-0/#/">Session #0</a></td>
                                    <td>표준 입출력과 변수의 개념</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><a href="https://mossol.net/season1/session-1/#/">Session #1</a></td>
                                    <td>리스트의 개념과 HTML 기초</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><a href="https://mossol.net/season1/session-2/#/">Session #2</a></td>
                                    <td>딕셔너리 개념과 Git의 사용법</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><a href="https://mossol.net/season1/session-3/#/">Session #3</a></td>
                                    <td>함수와 모듈</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Row style={{ marginTop : 29, marginBottom: 50}}>
                        <Col>
                            <h1 className="display-5">Season #0. - Session</h1>
                            <p>지난 시즌 세션 자료들입니다.</p>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Session</th>
                                    <th scope="col">Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.priorSession.map((row, i) => {
                                    return (<tr>
                                        <th scope="row">{i}</th>
                                        <td><a href={row}>Session #{i}</a></td>
                                        <td></td>
                                    </tr>)
                                })}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

const styles = {
    container : {
        backgroundImage : `url(images/background.jpg)`,
        backgroundSize : `cover`,
    }
};

export default OpenCollege;